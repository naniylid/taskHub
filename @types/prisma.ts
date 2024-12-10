import { Tasks, Task } from '@prisma/client';

export type ProductWithRelations = Tasks & { items: Task[] };
