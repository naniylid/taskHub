import { prisma } from '@/prisma/prisma-client';
import { authOptions } from '@/shared/constants/auth-options';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json({ message: 'You are not authorized' }, { status: 401 });
        }

        const userId = Number(session.user.id);
        if (isNaN(userId)) {
            return NextResponse.json({ message: 'Invalid user ID' }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                firstName: true,
                lastName: true,
                username: true,
                email: true,
            },
        });

        // Return 404 if the user is not found
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error('[USER_GET] Server error:', error);
        return NextResponse.json(
            { message: 'An error occurred while fetching the user data' },
            { status: 500 },
        );
    }
}
