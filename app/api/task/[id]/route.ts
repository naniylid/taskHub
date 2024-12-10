import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const id = Number(params.id);
        const data = (await req.json()) as {
            title: string;
            description: string;
            status: any;
            priority: any;
            date: Date;
            completed: boolean;
        };
        const token = req.cookies.get('taskToken')?.value;

        if (!token) {
            return NextResponse.json({ error: 'Task token not found' }, { status: 400 });
        }

        const taskItem = await prisma.task.findFirst({
            where: { id },
        });

        if (!taskItem) {
            return NextResponse.json({ error: 'Task item not found' }, { status: 404 });
        }

        await prisma.task.update({
            where: { id },
            data: {
                title: data.title,
                description: data.description,
                status: data.status,
                priority: data.priority,
                date: data.date,
                completed: data.completed,
            },
        });

        return NextResponse.json({ message: 'Task updated successfully' });
    } catch (error) {
        console.log('[TASK_PATCH] Server error', error);
        return NextResponse.json({ message: 'Cant update task' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const id = Number(params.id);
        const token = req.cookies.get('taskToken')?.value;

        if (!token) {
            return NextResponse.json({ error: 'Task token not found' }, { status: 400 });
        }

        const taskItem = await prisma.task.findFirst({
            where: { id },
        });

        if (!taskItem) {
            return NextResponse.json({ error: 'Task item not found' }, { status: 404 });
        }

        await prisma.task.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.log('[TASK_DELETE] Server error', error);
        return NextResponse.json({ message: 'Cant delete task' }, { status: 500 });
    }
}
