import React from 'react';
import { LayoutDashboard, ClipboardCheck, Settings, CircleHelp, LogOut } from 'lucide-react';
import Link from 'next/link';

export const Sidebar = () => {
    return (
        <div className='bg-primary h-full w-64 flex flex-col items-center py-8 text-white shadow-lg dark:bg-[#1f1f1f] dark:border dark:border-primary'>
            {/* User Info */}
            <div className='mb-8 flex flex-col items-center relative'>
                <div className='mt-4 text-center '>
                    <h2 className='text-lg font-semibold'>Sundar Gurung</h2>
                    <p className='text-sm text-gray-100'>sundargurung360@gmail.com</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className='flex flex-col gap-4 text-left w-full px-4'>
                <Link href='/' className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'>
                    <LayoutDashboard />
                    Dashboard
                </Link>

                <Link
                    href='/mytask'
                    className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'
                >
                    <ClipboardCheck />
                    My Task
                </Link>

                <Link
                    href='/settings'
                    className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'
                >
                    <Settings />
                    Settings
                </Link>
                <Link href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'>
                    <CircleHelp />
                    Help
                </Link>
            </nav>

            {/* Logout */}
            <div className='mt-auto w-full px-4'>
                <Link href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'>
                    <LogOut />
                    Logout
                </Link>
            </div>
        </div>
    );
};
