import React from 'react';

export const TaskDesc: React.FC = () => {
    return (
        <div>
            <label
                className='block text-base font-semibold text-muted-foreground'
                htmlFor='description'
            >
                Task Description
            </label>
            <textarea
                id='description'
                className='mt-1 block w-full overflow-y-scroll max-h-40 resize-none border border-border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none dark:bg-[#2E2E2E] dark:placeholder:text-muted-foreground dark:focus-visible:ring-ring dark:focus-visible:ring-offset-0'
                placeholder='Start writing here...'
            ></textarea>
        </div>
    );
};
