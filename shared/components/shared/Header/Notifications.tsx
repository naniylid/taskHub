import React from 'react';
import { Reply } from 'lucide-react';

export const Notifications: React.FC = () => {
    return (
        <div className='notifications absolute right-10 top-50 max-w-[400px] w-full bg-white  rounded-2xl shadow-lg dark:bg-[#1f1f1f] dark:text-white dark:shadow-white/20'>
            <header className='flex justify-between p-4 dark:border-b'>
                <div>
                    <h2 className='text-md font-semibold'>Notifications</h2>
                    <p className='text-xs text-[#a1a3ab]'>Today</p>
                </div>
                <button>
                    <Reply />
                </button>
            </header>
            <ul className='max-h-80 overflow-y-auto  rounded-2xl  bg-gray-100 p-4 dark:bg-[#1f1f1f]'>
                <li className='cursor-pointer  hover:bg-gray-200 p-3 rounded-md dark:hover:text-[#1f1f1f]'>
                    <h4 className='text-sm font-semibold'>
                        Complete the UI design of Landing Page for FoodVentures.
                        <span className='text-xs text-[#a1a3ab]'> 2 days ago</span>
                    </h4>
                    <p className='text-sm pt-1'>
                        Priority: <span className='text-primary font-semibold'>High</span>
                    </p>
                </li>
            </ul>
        </div>
    );
};
