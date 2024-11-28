import React from 'react';
import { TaskCard } from '../../TaskCard/TaskCard';

export const ToDo = () => {
    return (
        <div className='todo h-full w-full  rounded-2xl shadow-md p-5'>
            <div className='todo-header flex justify-between'>
                <div className='todo-header__left flex align-center gap-2'>
                    <svg
                        aria-hidden='true'
                        aria-label='Task icon'
                        width='29'
                        height='33'
                        viewBox='0 0 29 33'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M23.8511 26.2698L22.4285 25.4499V22.6013C22.4285 22.5211 22.3965 22.4442 22.3397 22.3875C22.2829 22.3308 22.2059 22.299 22.1255 22.299C22.0452 22.299 21.9681 22.3308 21.9113 22.3875C21.8545 22.4442 21.8226 22.5211 21.8226 22.6013V25.6246C21.8226 25.6777 21.8366 25.7298 21.8631 25.7758C21.8897 25.8218 21.928 25.8599 21.974 25.8865L23.5482 26.7935C23.5825 26.8135 23.6205 26.8266 23.66 26.8319C23.6994 26.8372 23.7395 26.8346 23.778 26.8243C23.8164 26.814 23.8524 26.7962 23.8839 26.7719C23.9154 26.7476 23.9418 26.7173 23.9614 26.6828C24.0016 26.6134 24.0126 26.531 23.9919 26.4535C23.9713 26.3761 23.9206 26.31 23.8511 26.2698ZM22.1255 19.578C18.7791 19.578 16.0664 22.2851 16.0664 25.6246C16.0664 28.9642 18.7791 31.6713 22.1255 31.6713C25.4701 31.6676 28.181 28.9624 28.1846 25.6246C28.1846 22.2851 25.4719 19.578 22.1255 19.578ZM22.1255 31.0666C21.4094 31.0666 20.7003 30.9259 20.0387 30.6524C19.3771 30.3789 18.7759 29.978 18.2695 29.4727C17.7631 28.9674 17.3615 28.3674 17.0874 27.7072C16.8134 27.0469 16.6723 26.3393 16.6723 25.6246C16.6723 24.91 16.8134 24.2023 17.0874 23.5421C17.3615 22.8818 17.7631 22.2819 18.2695 21.7766C18.7759 21.2712 19.3771 20.8704 20.0387 20.5969C20.7003 20.3234 21.4094 20.1827 22.1255 20.1827C23.5713 20.1843 24.9574 20.7581 25.9797 21.7784C27.0021 22.7986 27.5771 24.1818 27.5787 25.6246C27.5787 27.0679 27.0042 28.4521 25.9815 29.4727C24.9588 30.4933 23.5718 31.0666 22.1255 31.0666Z'
                            fill='#888888'
                            stroke='#A1A3AB'
                        />
                        <path
                            d='M15.8909 2.39129H13.5073V1.59419C13.506 1.17178 13.3382 0.767019 13.0404 0.468322C12.7427 0.169626 12.3392 0.00126159 11.9182 0H5.56182C5.14075 0.00126159 4.73729 0.169626 4.43955 0.468322C4.14181 0.767019 3.97398 1.17178 3.97273 1.59419V2.39129H1.58909C1.16802 2.39255 0.764563 2.56092 0.466823 2.85961C0.169083 3.15831 0.00125755 3.56307 0 3.98549V20.7245C0.00125755 21.1469 0.169083 21.5517 0.466823 21.8504C0.764563 22.1491 1.16802 22.3175 1.58909 22.3187H8.74V20.7245H1.58909V3.98549H3.97273V6.37678H13.5073V3.98549H15.8909V12.7536H17.48V3.98549C17.4787 3.56307 17.3109 3.15831 17.0132 2.85961C16.7154 2.56092 16.312 2.39255 15.8909 2.39129ZM11.9182 4.78258H5.56182V1.59419H11.9182V4.78258Z'
                            fill='#A1A3AB'
                        />
                    </svg>
                    <h3 className='text-base text-primary font-medium'>To-Do</h3>
                </div>
                <div className='todo-header__right'>
                    <button className='flex items-center gap-2 text-[#a1a3ab]'>
                        <svg
                            aria-hidden='true'
                            aria-label='Add task icon'
                            width='11'
                            height='11'
                            viewBox='0 0 11 11'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M10.0595 6.19048H6.19048V10.0595C6.19048 10.2648 6.10895 10.4616 5.96383 10.6067C5.81871 10.7518 5.62189 10.8333 5.41667 10.8333C5.21144 10.8333 5.01462 10.7518 4.8695 10.6067C4.72438 10.4616 4.64286 10.2648 4.64286 10.0595V6.19048H0.773809C0.568582 6.19048 0.371761 6.10895 0.226644 5.96383C0.0815263 5.81872 0 5.62189 0 5.41667C0 5.21144 0.0815263 5.01462 0.226644 4.8695C0.371761 4.72438 0.568582 4.64286 0.773809 4.64286H4.64286V0.77381C4.64286 0.568582 4.72438 0.371761 4.8695 0.226643C5.01462 0.0815259 5.21144 0 5.41667 0C5.62189 0 5.81871 0.0815259 5.96383 0.226643C6.10895 0.371761 6.19048 0.568582 6.19048 0.77381V4.64286H10.0595C10.2648 4.64286 10.4616 4.72438 10.6067 4.8695C10.7518 5.01462 10.8333 5.21144 10.8333 5.41667C10.8333 5.62189 10.7518 5.81872 10.6067 5.96383C10.4616 6.10895 10.2648 6.19048 10.0595 6.19048Z'
                                fill='#F24E1E'
                            />
                        </svg>
                        Add task
                    </button>
                </div>
            </div>
            <div className='todo-current-day w-full mt-4 border-b border-[#A1A3AB]'>
                <div className='todo-current-day_header flex items-center  text-xs'>
                    <p>{new Date().toLocaleString('en-GB', { day: 'numeric', month: 'long' })}</p>
                    <div className='today flex items-center gap-0.5 '>
                        <svg
                            width='8'
                            height='8'
                            viewBox='0 0 8 9'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g clip-path='url(#clip0_318_1834)'>
                                <path
                                    d='M4.00016 3.00464C4.32672 3.00462 4.64609 3.10054 4.91861 3.28047C5.19112 3.46041 5.40477 3.71644 5.53302 4.01676C5.66127 4.31708 5.69846 4.64846 5.63999 4.96974C5.58151 5.29102 5.42994 5.58805 5.20411 5.82392C4.97827 6.0598 4.68811 6.22414 4.36967 6.29652C4.05124 6.3689 3.71855 6.34614 3.41294 6.23106C3.10733 6.11598 2.84226 5.91366 2.65065 5.64923C2.45904 5.38479 2.34934 5.06989 2.33516 4.74364L2.3335 4.67131L2.33516 4.59897C2.3538 4.16989 2.53737 3.76456 2.84757 3.46753C3.15778 3.17049 3.57068 3.00466 4.00016 3.00464Z'
                                    fill='#A1A3AB'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_318_1834'>
                                    <rect
                                        width='8'
                                        height='8'
                                        fill='white'
                                        transform='translate(0 0.671265)'
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='text-[#a1a3ab]'>Today</p>
                    </div>
                </div>
                <ul className='todo-current-list flex flex-col gap-2 items-center justify-center w-full mt-4 pb-5 '>
                    <li>
                        <TaskCard status='pending' />
                    </li>
                    <li>
                        <TaskCard status='pending' />
                    </li>
                </ul>
            </div>
            <div className='todo-list flex flex-col gap-2 items-center justify-center w-full mt-4'>
                <TaskCard status='pending' />
            </div>
        </div>
    );
};
