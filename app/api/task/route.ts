import { prisma } from '@/prisma/prisma-client';
import { findOrCreateTask } from '@/shared/lib/find-or-create-task';
import { TaskItemDTO } from '@/shared/services/tasks.dto';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('taskToken')?.value;

        if (!token) {
            return NextResponse.json({ totalAmount: 0, items: [] });
        }

        const userTasks = await prisma.tasks.findFirst({
            where: { token },
            include: {
                items: {
                    include: {
                        tasks: true,
                    },
                },
            },
        });

        if (!userTasks) {
            return NextResponse.json({ message: 'No tasks found for this token' }, { status: 404 });
        }

        return NextResponse.json(userTasks);
    } catch (error) {
        console.log('[TASK_GET] Server error', error);
        return NextResponse.json({ message: 'Cant get tasks' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        let token = req.cookies.get('taskToken')?.value;

        if (!token) {
            token = crypto.randomUUID();
        }

        const userTasks = await findOrCreateTask(token);
        const data = (await req.json()) as TaskItemDTO;

        const findTaskItem = await prisma.task.findFirst({
            where: {
                tasksId: userTasks.id,
            },
        });

        if (findTaskItem) {
            await prisma.task.update({
                where: {
                    id: findTaskItem.id,
                },
                data: {
                    title: data.title,
                    description: data.description,
                    status: data.status,
                    priority: data.priority,
                    date: data.date,
                    completed: data.completed,
                },
            });
        } else {
            await prisma.task.create({
                data: {
                    token: token,
                    tasksId: userTasks.id,
                    title: data.title,
                    description: data.description,
                    status: data.status,
                    priority: data.priority,
                    date: data.date,
                    completed: data.completed,
                },
            });
        }

        return NextResponse.json({ message: 'Task created/updated successfully' });
    } catch (error) {
        console.log('[TASK_POST] Server error', error);
        return NextResponse.json({ message: 'Cant create task' }, { status: 500 });
    }
}
