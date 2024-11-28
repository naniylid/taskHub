import React from 'react';
import { FullTask } from '../FullTask';
import { TaskCard } from '../TaskCard/TaskCard';

export const MyTasks = () => {
    return (
        <section className='flex h-full pb-10 justify-center gap-4'>
            <div className='my-tasks w-1/3 border border-gray-300 rounded-2xl shadow-md p-5'>
                <h2 className='text-lg font-semibold underline decoration-primary underline-offset-4 decoration-2'>
                    My Tasks
                </h2>
                <div className='task-list mt-4 flex flex-col gap-2'>
                    <TaskCard status='To-do' />
                    <TaskCard status='To-do' />
                </div>
            </div>
            <div className='w-1/2'>
                <FullTask />
            </div>
        </section>
    );
};
