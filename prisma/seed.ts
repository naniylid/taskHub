const { PrismaClient } = require('@prisma/client');
import { hashSync } from 'bcrypt';
import { use } from 'react';
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Создаем пользователя 1
    const user1 = await prisma.user.create({
        data: {
            firstName: 'John',
            lastName: 'Doe',
            username: 'johndoe',
            email: 'john.doe@example.com',
            password: hashSync('password123', 10),
        },
    });

    // Создаем объект Tasks для пользователя 1
    const tasks1 = await prisma.tasks.create({
        data: {
            userId: user1.id,
            token: 'example-token-1',
        },
    });

    // Добавляем задачи к Tasks для пользователя 1
    await prisma.task.createMany({
        data: [
            {
                title: 'Complete project report',
                description: 'Write and submit the project report by the end of the week.',
                date: new Date(),
                status: 'IN_PROGRESS',
                priority: 'HIGH',
                completed: false,
                tasksId: tasks1.id, // Привязка к объекту Tasks
            },
            {
                title: 'Team meeting',
                description: 'Discuss project updates and assign tasks.',
                date: new Date(),
                status: 'IN_PROGRESS',
                priority: 'HIGH',
                completed: false,
                tasksId: tasks1.id, // Привязка к объекту Tasks
            },
        ],
    });

    // Создаем пользователя 2
    const user2 = await prisma.user.create({
        data: {
            fullName: 'Jane Smith',
            email: 'jane.smith@example.com',
            password: hashSync('password123', 10),
        },
    });

    // Создаем объект Tasks для пользователя 2
    const tasks2 = await prisma.tasks.create({
        data: {
            userId: user2.id,
            token: 'example-token-2',
        },
    });

    // Добавляем задачи к Tasks для пользователя 2
    await prisma.task.create({
        data: {
            title: 'Prepare presentation',
            description: 'Create slides for the upcoming meeting.',
            date: new Date(),
            status: 'IN_PROGRESS',
            priority: 'HIGH',
            completed: false,
            tasksId: tasks2.id, // Привязка к объекту Tasks
        },
    });

    console.log('Seeding completed. Users and tasks created.');
}

main()
    .then(() => prisma.$disconnect())
    .catch((e) => {
        console.error('Seeding error:', e);
        prisma.$disconnect();
        process.exit(1);
    });
