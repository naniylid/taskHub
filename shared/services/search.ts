import { Task } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const search = async (query: string): Promise<Task[]> => {
    return (await axiosInstance.get<Task[]>(ApiRoutes.SEARCH_TASKS, { params: { query } })).data;
};
