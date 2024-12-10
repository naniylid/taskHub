'use server';

import { prisma } from '@/prisma/prisma-client';
import { CheckoutFormValues } from '@/shared/constants/checkout-form-schema';
import { getUserSession } from '@/shared/lib/get-user-session';
import { Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { cookies } from 'next/headers';

// CreateTask: deletes tasks associated with a specific task token
export async function CreateTask(data: CheckoutFormValues) {
    try {
        const cookieStore = await cookies();
        const taskToken = cookieStore.get('taskToken')?.value;

        if (!taskToken) {
            throw new Error('Task token not found');
        }

        // Find user tasks
        const userTasks = await prisma.tasks.findFirst({
            include: {
                user: true,
                items: {
                    include: {
                        tasks: true,
                    },
                },
            },
            where: {
                token: taskToken,
            },
        });

        if (!userTasks) {
            throw new Error('Task not found');
        }

        // Delete associated tasks
        await prisma.task.deleteMany({
            where: {
                tasksId: userTasks.id,
            },
        });
    } catch (err) {
        console.error('[CreateTask] Server error:', err);
        throw new Error('Unable to create task');
    }
}

// updateUserInfo: updates user information
export async function updateUserInfo(body: Prisma.UserUpdateInput) {
    try {
        const currentUser = await getUserSession();

        if (!currentUser) {
            throw new Error('User not found');
        }

        const findUser = await prisma.user.findFirst({
            where: {
                id: Number(currentUser.id),
            },
        });

        // Perform the update
        await prisma.user.update({
            where: {
                id: Number(currentUser.id),
            },
            data: {
                firstName: body.firstName,
                lastName: body.lastName,
                username: body.username,
                email: body.email,
                password: body.password
                    ? hashSync(body.password as string, 10)
                    : findUser?.password,
                position: body.position,
                phone: body.phone,
            },
        });
    } catch (err) {
        console.error('[UPDATE_USER] Error:', err);
        throw new Error('Failed to update user information');
    }
}

// registerUser: registers a new user
export async function registerUser(body: Prisma.UserCreateInput) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: body.email,
            },
        });

        if (user) {
            throw new Error('User already exists');
        }

        const createdUser = await prisma.user.create({
            data: {
                firstName: body.firstName,
                lastName: body.lastName,
                username: body.username,
                email: body.email,
                password: hashSync(body.password, 10),
            },
        });

        console.log(createdUser);

        return createdUser;
    } catch (err) {
        console.error('[CREATE_USER] Error:', err);
        throw new Error('Unable to create user');
    }
}
