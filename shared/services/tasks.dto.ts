import { Task } from '@prisma/client';

export type TaskItemDTO = Task & {
    taskItem: Task;
};
