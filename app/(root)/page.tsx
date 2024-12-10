import { prisma } from '@/prisma/prisma-client';
import { Dashboard } from '@/shared/components/shared';
import { getUserSession } from '@/shared/lib/get-user-session';
import { redirect } from 'next/navigation';

export default async function Page() {
    const session = await getUserSession();

    if (!session) {
        return redirect('/signin');
    }

    const user = await prisma.user.findFirst({ where: { id: Number(session?.id) } });

    if (!user) {
        return redirect('/signin');
    }

    return redirect('/home');
}
