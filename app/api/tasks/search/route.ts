import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || '';

    const tasks = await prisma.tasks.findMany({
        where: {
            items: {
                some: {
                    title: {
                        contains: query,
                        mode: 'insensitive',
                    },
                },
            },
        },
        take: 5,
    });

    return NextResponse.json(tasks);
}
