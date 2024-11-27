import React from 'react';
import { TaskCard } from './TaskCard/TaskCard';

export const Completed = () => {
    return (
        <div className='rounded-2xl shadow-md p-5'>
            <div className='flex align-center gap-2'>
                <svg
                    aria-hidden='true'
                    aria-label='Completed icon'
                    width='21'
                    height='24'
                    viewBox='0 0 21 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M2.33333 24H18.6667C19.9535 24 21 22.9236 21 21.6V3.6C21 2.2764 19.9535 1.2 18.6667 1.2H16.3333C16.3333 0.88174 16.2104 0.576515 15.9916 0.351472C15.7728 0.126428 15.4761 0 15.1667 0H5.83333C5.52391 0 5.22717 0.126428 5.00838 0.351472C4.78958 0.576515 4.66667 0.88174 4.66667 1.2H2.33333C1.0465 1.2 0 2.2764 0 3.6V21.6C0 22.9236 1.0465 24 2.33333 24ZM2.33333 3.6H4.66667V6H16.3333V3.6H18.6667V21.6H2.33333V3.6Z'
                        fill='#A1A3AB'
                    />
                    <path
                        d='M9.68093 14.1479L7.62296 11.7144L6 13.6335L9.68093 17.9861L15.6574 10.9191L14.0345 9L9.68093 14.1479Z'
                        fill='#A1A3AB'
                    />
                </svg>
                <h3 className='text-base text-primary font-medium'>Completed Task</h3>
            </div>
            <ul className='mt-5 flex flex-col gap-2 items-center justify-center'>
                <li>
                    <TaskCard status='Completed' />
                </li>
                <li>
                    <TaskCard status='Completed' />
                </li>
            </ul>
        </div>
    );
};
