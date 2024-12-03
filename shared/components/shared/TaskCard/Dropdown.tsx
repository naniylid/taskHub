import Link from 'next/link';
import React from 'react';

export const Dropdown = () => {
    return (
        <ul className='absolute left-0 mt-2 w-30 bg-white shadow-md rounded-md border border-gray-300 z-10 text-xs dark:bg-[#1f1f1f]'>
            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md hover:text-primary'>
                <Link href='editTask'>Edit</Link>
            </li>
            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md hover:text-primary'>
                Delete
            </li>
            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md hover:text-primary'>
                Finish
            </li>
        </ul>
    );
};
