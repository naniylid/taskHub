import React from 'react';

interface Prop {
    value: number;
}

export const Progress: React.FC<Prop> = ({ value }) => {
    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const progress = circumference - (value / 100) * circumference;

    return (
        <div className='progress flex flex-col items-center'>
            <div className='relative w-28 h-28'>
                <svg className='w-full h-full transform -rotate-90'>
                    <circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        fill='transparent'
                        stroke='#d9d9d9'
                        strokeWidth={strokeWidth}
                    />

                    <circle
                        cx='50%'
                        cy='50%'
                        r={radius}
                        fill='transparent'
                        stroke='#05a301'
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={progress}
                        strokeLinecap='round'
                    />
                </svg>

                <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='text-2xl font-semibold'>{`${value}%`}</span>
                </div>
            </div>
            <div className='progress-status flex gap-2 items-center mt-3'>
                <svg
                    width='7'
                    height='7'
                    viewBox='0 0 7 7'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <circle cx='3.5' cy='3.5' r='3.5' fill='#05A301' />
                </svg>
                <p>Completed</p>
            </div>
        </div>
    );
};
