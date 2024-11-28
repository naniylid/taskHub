import React from 'react';
import Link from 'next/link';
import { Input } from '../ui/input';
import { Radioinput } from '../ui/radioInput';
import { Button } from '../ui/button';

export const AddTask = () => {
    return (
        <div className='relative bg-white max-w-5xl   w-full border border-gray-300 rounded-2xl shadow-md px-20 py-8'>
            <div className='flex justify-between items-center'>
                <h2 className='text-lg font-semibold underline decoration-primary underline-offset-4 decoration-2'>
                    Add New Task
                </h2>
                <Link className='font-semibold top-4 right-4 hover:underline' href='/'>
                    Go back
                </Link>
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

                <div>
                    <p className='block text-base font-semibold text-muted-foreground'>Priority</p>
                    <div className='flex gap-5 items-center mt-1'>
                        <Radioinput
                            id='Extreme'
                            name='Extreme'
                            className='text-sm text-[#a1a3ab]'
                            label={
                                <p>
                                    <span className='text-[#FF0000]'>&#8226; </span>
                                    Extreme
                                </p>
                            }
                            value=''
                        />
                        <Radioinput
                            id='Extreme'
                            name='Extreme'
                            className='text-sm text-[#a1a3ab]'
                            label={
                                <p>
                                    <span className='text-[#3abeff]'>&#8226; </span>
                                    Moderate
                                </p>
                            }
                            value=''
                        />
                        <Radioinput
                            id='Extreme'
                            name='Extreme'
                            className='text-sm text-[#a1a3ab]'
                            label={
                                <p>
                                    <span className='text-[#05a301]'>&#8226; </span>
                                    Low
                                </p>
                            }
                            value=''
                        />
                    </div>
                </div>

                <div>
                    <label
                        className='block text-base font-semibold text-muted-foreground'
                        htmlFor='description'
                    >
                        Task Description
                    </label>
                    <textarea
                        id='description'
                        className='mt-1 block w-full overflow-y-scroll max-h-40 border border-border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none'
                        placeholder='Start writing here...'
                    ></textarea>
                </div>

                <Button size={'lg'} type='submit' className='w-1/5'>
                    Done
                </Button>
            </form>
        </div>
    );
};
