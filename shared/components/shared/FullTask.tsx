import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash, NotebookPen } from 'lucide-react';
import taskImage from '@/public/full-task.jpg';
import { Button } from '@/shared/components/shared';

export const FullTask: React.FC<{ goBack?: boolean }> = ({ goBack }) => {
    return (
        <div className='fullTask relative bg-white max-w-5xl  w-full border border-gray-300 rounded-2xl shadow-md p-5 dark:bg-[#1f1f1f]'>
            {goBack && (
                <Link className='absolute font-semibold top-4 right-4 hover:underline' href='/'>
                    Go back
                </Link>
            )}

            <div className='flex gap-4 items-center'>
                <Image src={taskImage} alt='Task Image' className='w-1/3 h-full' />
                <div className='task-info h-full flex flex-col gap-2'>
                    <h2 className='text-lg font-semibold'>Submit documents</h2>
                    <p className='text-xs'>
                        Priority: <span className='text-primary font-semibold'>High</span>
                    </p>
                    <p className='text-xs'>
                        Status: <span className='text-primary font-semibold'>High</span>
                    </p>
                    <p className='text-[#a1a3ab]'>
                        Created on: {new Date().toLocaleDateString('en-GB')}
                    </p>
                </div>
            </div>
            <p className='mt-4 text-sm text-[#747474]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem atque totam quis
                libero porro dolorem facilis eaque placeat error, vel beatae architecto nostrum
                nulla harum distinctio natus reiciendis voluptatibus temporibus. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Rem atque totam quis libero porro dolorem
                facilis eaque placeat error, vel beatae architecto nostrum nulla harum distinctio
                natus reiciendis voluptatibus temporibus. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Rem atque totam quis libero porro dolorem facilis eaque placeat
                error, vel beatae architecto nostrum nulla harum distinctio natus reiciendis
                voluptatibus temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Rem atque totam quis libero porro dolorem facilis eaque placeat error, vel beatae
                architecto nostrum nulla harum distinctio natus reiciendis voluptatibus temporibus.
            </p>

            <div className='buttons-wrapper items-end justify-end mt-4 flex gap-2'>
                <Link href='/'>
                    <Button variant='default' className='flex items-center '>
                        <Trash className='absolute flex items-center' />
                    </Button>
                </Link>
                <Link href='/'>
                    <Button variant='default' className='flex items-center '>
                        <NotebookPen className='absolute flex items-center' />
                    </Button>{' '}
                </Link>
            </div>
        </div>
    );
};
