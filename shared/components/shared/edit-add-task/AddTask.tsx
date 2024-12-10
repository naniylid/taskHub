'use client';

import React from 'react';

import { Input, Button, Select } from '@/shared/components/shared';
import { useRouter } from 'next/navigation';
import { Priority } from './Priority';
import { TaskDesc } from './TaskDesc';

export const AddTask: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
    const router = useRouter();

    return (
        <div className='relative bg-white max-w-5xl   w-full border border-gray-300 rounded-2xl shadow-md px-20 py-8 dark:bg-[#1f1f1f]'>
            <div className='flex justify-between items-center'>
                {isEdit ? (
                    <h2 className='text-lg font-semibold underline decoration-primary underline-offset-4 decoration-2'>
                        Edit Task
                    </h2>
                ) : (
                    <h2 className='text-lg font-semibold underline decoration-primary underline-offset-4 decoration-2'>
                        Add New Task
                    </h2>
                )}

                <button
                    className='font-semibold top-4 right-4 hover:underline'
                    onClick={() => router.back()}
                >
                    Go back
                </button>
            </div>
            <form className='flex flex-col gap-5 mt-4 border border-gray-300 p-5 '>
                <div>
                    <label
                        className='block text-base font-semibold text-muted-foreground'
                        htmlFor='title'
                    >
                        Title
                    </label>
                    <Input
                        type='text'
                        className='mt-1 block w-full border border-border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none'
                        id='title'
                        placeholder='Enter task title'
                    />
                </div>

                <div>
                    <label
                        className='block text-base font-semibold text-muted-foreground'
                        htmlFor='date'
                    >
                        Date
                    </label>
                    <Input
                        type='date'
                        className='mt-1 block w-full border border-border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none'
                        id='date'
                    />
                </div>

                <Priority />

                <Select label='Status' />

                <TaskDesc />

                <Button size={'lg'} type='submit' className='w-1/5'>
                    Done
                </Button>
            </form>
        </div>
    );
};
