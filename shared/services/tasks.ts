import { axiosInstance } from './instance';
import { TaskItemDTO } from './tasks.dto';

export const getTasks = async (): Promise<TaskItemDTO> => {
    return (await axiosInstance.get<TaskItemDTO>('/task')).data;
};

export const updateTaskItem = async (
    itemId: number,
    title: string,
    description: string,
    status: string,
    priority: string,
    date: Date,
    completed: boolean,
): Promise<TaskItemDTO> => {
    return (
        await axiosInstance.patch<TaskItemDTO>('/task/' + itemId, {
            title,
            description,
            status,
            priority,
            date,
            completed,
        })
    ).data;
};

export const removeTaskItem = async (id: number): Promise<TaskItemDTO> => {
    return (await axiosInstance.delete<TaskItemDTO>('/task/' + id)).data;
};

export const addTaskItem = async (values: TaskItemDTO): Promise<TaskItemDTO> => {
    return (await axiosInstance.post<TaskItemDTO>('/task', values)).data;
};
