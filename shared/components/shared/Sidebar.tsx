import React from 'react';
import Image from 'next/image';
import {
    LayoutDashboard,
    AlarmClockCheck,
    ClipboardCheck,
    Logs,
    Settings,
    CircleHelp,
    LogOut,
} from 'lucide-react';

export const Sidebar = () => {
    return (
        <div className='bg-primary h-screen w-64 flex flex-col items-center py-8 text-white shadow-lg relative'>
            {/* User Info */}
            <div className='mb-8 flex flex-col items-center relative'>
                <div className='w-20 h-20 rounded-full overflow-hidden border-2 border-white absolute -top-20'>
                    <Image
                        src='/profile.jpg' // Замените на путь к вашему изображению
                        alt='User Avatar'
                        width={80}
                        height={80}
                    />
                </div>
                <div className='mt-12 text-center'>
                    <h2 className='text-lg font-semibold'>Sundar Gurung</h2>
                    <p className='text-sm text-gray-100'>sundargurung360@gmail.com</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className='flex flex-col gap-4 text-left w-full px-4'>
                <a href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'>
                    <LayoutDashboard />
                    Dashboard
                </a>
                <a href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'>
                    <AlarmClockCheck />
                    Vital Task
                </a>
                <a href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'>
                    <ClipboardCheck />
                    My Task
                </a>
                <a href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'>
                    <Logs />
                    Task Categories
                </a>
                <a href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'>
                    <Settings />
                    Settings
                </a>
                <a href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'>
                    <CircleHelp />
                    Help
                </a>
            </nav>

            {/* Logout */}
            <div className='mt-auto w-full px-4'>
                <a href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'>
                    <LogOut />
                    Logout
                </a>
            </div>
        </div>
    );
};
