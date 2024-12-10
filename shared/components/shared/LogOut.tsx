'use client';

import React from 'react';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export const LoginOut: React.FC = () => {
    const handleLogout = () => {
        signOut({
            callbackUrl: '/signin',
        });
    };

    return (
        <Link
            href='#'
            onClick={handleLogout}
            className='flex items-center gap-3 p-3 rounded-lg hover:bg-red-500'
        >
            <LogOut />
            Logout
        </Link>
    );
};
