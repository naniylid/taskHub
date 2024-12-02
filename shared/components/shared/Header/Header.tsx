'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, Bell } from 'lucide-react';

import { Container, Button, Input, ThemeSwitcher, Notifications } from '@/shared/components/shared';

export const Header = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [notifications, setNotifications] = React.useState(false);

    return (
        <header className=' header  fixed top-0 left-0 z-10 h-100 w-full border-b shadow-md  bg-[#f8f8f8] dark:bg-[#1f1f1f]'>
            <Container className='flex items-center justify-between py-8 px-2'>
                <Link href='/'>
                    <div className='flex items-center gap-4'>
                        <h1 className='text-3xl font-black font-semibold'>
                            <span className='text-primary'>Task</span>Hub
                        </h1>
                    </div>
                </Link>

                {/* Input */}
                <div className='flex rounded-2xl flex-1 justify-center relative h-10 z-30'>
                    <div className='relative w-6/12'>
                        <Input
                            className='rounded-xl shadow-md outline-none h-full w-full pl-4 pr-10'
                            type='search'
                            placeholder='Search your task here...'
                        />
                        <Button
                            onClick={() => {}}
                            variant='default'
                            className='absolute right-0 top-0 h-full p-0 flex items-center justify-center'
                        >
                            <Search className='absolute flex items-center' />
                        </Button>
                    </div>
                </div>

                {/* Правые кнопки */}

                <div className=' flex flex-2 items-center gap-2'>
                    <Button
                        onClick={() => {
                            setNotifications(!notifications);
                        }}
                        variant='default'
                        className='flex items-center '
                    >
                        <Bell className='absolute flex items-center' />
                    </Button>

                    <ThemeSwitcher />
                </div>

                {/* Дата */}
                <div className='flex ml-12 flex-col'>
                    <p className='text-sm font-medium'>
                        {new Date()
                            .toLocaleDateString('en-GB', { weekday: 'long' })
                            .charAt(0)
                            .toUpperCase() +
                            new Date().toLocaleDateString('en-GB', { weekday: 'long' }).slice(1)}
                    </p>
                    <p className='text-sm font-medium text-[#3abeff]'>
                        {' '}
                        {new Date().toLocaleDateString('en-GB')}
                    </p>
                </div>
            </Container>
            {notifications && <Notifications />}
        </header>
    );
};
