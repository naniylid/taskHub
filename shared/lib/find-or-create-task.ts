import { prisma } from '@/prisma/prisma-client';

export const findOrCreateTask = async (token: string) => {
    try {
        let userTasks = await prisma.tasks.findFirst({
            where: {
                token,
            },
        });

        if (!userTasks) {
            userTasks = await prisma.tasks.create({
                data: {
                    token,
                },
            });
        }

        return userTasks;
    } catch (error) {
        console.error('[findOrCreateTask] Error', error);
        throw new Error('Could not find or create task');
    }
};
