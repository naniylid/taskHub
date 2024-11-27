import React from 'react';
import { Progress } from './Progress';

export const TaskStatus = () => {
    return (
        <div className='rounded-2xl shadow-md p-5'>
            <div className='flex align-center gap-2'>
                <svg
                    aria-hidden='true'
                    aria-label='Task icon'
                    width='23'
                    height='23'
                    viewBox='0 0 23 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M15.64 20.0776L13.2572 17.669L11.96 18.9802L15.64 22.7L23 15.2604L21.7028 13.9492L15.64 20.0776Z'
                        fill='#A1A3AB'
                    />
                    <path
                        d='M15.8909 2.39129H13.5073V1.59419C13.506 1.17178 13.3382 0.767019 13.0404 0.468322C12.7427 0.169626 12.3392 0.00126159 11.9182 0H5.56182C5.14075 0.00126159 4.73729 0.169626 4.43955 0.468322C4.14181 0.767019 3.97398 1.17178 3.97273 1.59419V2.39129H1.58909C1.16802 2.39255 0.764563 2.56092 0.466823 2.85961C0.169083 3.15831 0.00125755 3.56307 0 3.98549V20.7245C0.00125755 21.1469 0.169083 21.5517 0.466823 21.8504C0.764563 22.1491 1.16802 22.3175 1.58909 22.3187H8.74V20.7245H1.58909V3.98549H3.97273V6.37678H13.5073V3.98549H15.8909V12.7536H17.48V3.98549C17.4787 3.56307 17.3109 3.15831 17.0132 2.85961C16.7154 2.56092 16.312 2.39255 15.8909 2.39129ZM11.9182 4.78258H5.56182V1.59419H11.9182V4.78258Z'
                        fill='#A1A3AB'
                    />
                </svg>
                <h3 className='text-base text-primary font-medium'>Task Status</h3>
            </div>
            <div className='progress-list mt-5 flex justify-between'>
                <Progress value={50} />
                <Progress value={50} />
                <Progress value={50} />
            </div>
        </div>
    );
};