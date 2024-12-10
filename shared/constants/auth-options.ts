import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from '@/prisma/prisma-client';
import { User } from '@prisma/client';
import { compare, hashSync } from 'bcrypt';
import { RequestInternal } from 'next-auth';

interface ExtendedUser {
    firstName: string;
    lastName: string;
    email: string;
    id: number;
    username: string;
}

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(
                credentials: Record<'email' | 'password', string> | undefined,
                req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>,
            ): Promise<ExtendedUser | null> {
                if (!credentials) {
                    console.error('No credentials provided');
                    return null;
                }

                const { email, password } = credentials;
                console.log('Credentials:', { email, password });

                const user = await prisma.user.findUnique({
                    where: { email },
                });

                if (!user) {
                    console.error('User not found');
                    return null;
                }

                const isPasswordValid = await compare(password, user.password);
                if (!isPasswordValid) {
                    console.error('Invalid password');
                    return null;
                }

                // if (!user.verified) {
                //     console.error('User is not verified');
                //     return null;
                // }

                console.log('User authorized:', user);
                return {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                };
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({ user, account }) {
            try {
                if (account?.provider === 'credentials') {
                    return true;
                }

                if (!user.email) {
                    return false;
                }

                const existingUser = await prisma.user.findFirst({
                    where: {
                        OR: [
                            { provider: account?.provider, providerId: account?.providerAccountId },
                            { email: user.email },
                        ],
                    },
                });

                if (existingUser) {
                    await prisma.user.update({
                        where: { id: existingUser.id },
                        data: {
                            provider: account?.provider,
                            providerId: account?.providerAccountId,
                        },
                    });

                    return true;
                }

                await prisma.user.create({
                    data: {
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        username: user.email.split('@')[0],
                        password: hashSync(user.id.toString(), 10),
                        verified: new Date(),
                        provider: account?.provider,
                        providerId: account?.providerAccountId,
                    },
                });

                return true;
            } catch (error) {
                console.error('Error [SIGNIN]', error);
                return false;
            }
        },

        async jwt({ token }) {
            // Avoid calling the DB here; only modify the token as needed.
            if (!token.email) {
                return token;
            }

            const user = await prisma.user.findUnique({
                where: { email: token.email },
            });

            if (user) {
                token.id = String(user.id);
                token.email = user.email;
                token.fistName = user.firstName;
                token.lastName = user.lastName;
            }

            return token;
        },

        session({ session, token }) {
            if (session?.user) {
                session.user.id = token.id;
            }

            return session;
        },
    },
};
