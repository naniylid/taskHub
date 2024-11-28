import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, LockKeyhole } from 'lucide-react';
import image from '@/public/login-image.jpg';
import { CheckboxCustom } from '../../ui/checkbox';
import { FormInput } from '../../ui/formInput';

export const Login = () => {
    return (
        <main className='bg-primary bg-[url("/login-back.png")] flex justify-center items-center h-screen'>
            <div className='relative pt-10 pb-9 flex max-w-4xl w-full max-h-full items-center justify-between  bg-white dark:bg-card rounded-lg shadow-lg '>
                <div className='p-8 max-w-md w-1/2'>
                    <h1 className='text-4xl font-bold mb-6 text-black'>Sign In</h1>
                    <form className='flex flex-col gap-4'>
                        <FormInput
                            icon={
                                <User className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                            }
                            id='username'
                            type='text'
                            placeholder='Enter Username'
                        />

                        <FormInput
                            icon={
                                <LockKeyhole className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                            }
                            id='password'
                            type='password'
                            placeholder='Enter Password'
                        />

                        <CheckboxCustom label='Remember me' />
                        <button
                            type='submit'
                            className='w-full max-w-[130px] bg-primary text-primary-foreground  hover:opacity-80 p-2 rounded-md'
                        >
                            Login
                        </button>
                    </form>
                    <div className='mt-4 flex items-center gap-4'>
                        <p className='text-sm text-muted-foreground'>Or, Login with</p>
                        <div className='flex justify-center space-x-2 mt-2'>
                            <Link href='#'>
                                <svg
                                    aria-hidden='true'
                                    aria-label='Facebook'
                                    width='28'
                                    height='28'
                                    viewBox='0 0 28 28'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M26.2078 0H1.53047C0.685214 0 0 0.685214 0 1.53047V26.2078C0 27.0531 0.685214 27.7383 1.53047 27.7383H26.2078C27.0531 27.7383 27.7383 27.0531 27.7383 26.2078V1.53047C27.7383 0.685214 27.0531 0 26.2078 0Z'
                                        fill='#3D5A98'
                                    />
                                    <path
                                        d='M19.1366 27.7361V16.9947H22.7413L23.2804 12.8087H19.1366V10.1368C19.1366 8.92512 19.4741 8.09778 21.2108 8.09778H23.428V4.34778C22.3544 4.23589 21.2754 4.18268 20.196 4.18841C17.0038 4.18841 14.8054 6.13372 14.8054 9.722V12.8087H11.2007V16.9947H14.8054V27.7361H19.1366Z'
                                        fill='white'
                                    />
                                </svg>
                            </Link>
                            <Link href='#'>
                                <svg
                                    aria-hidden='true'
                                    aria-label='Google'
                                    width='26'
                                    height='25'
                                    viewBox='0 0 26 25'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M25.4952 10.0519H24.4883V10H13.2383V15H20.3027C19.272 17.9106 16.5027 20 13.2383 20C9.09641 20 5.73828 16.6419 5.73828 12.5C5.73828 8.35812 9.09641 5 13.2383 5C15.1502 5 16.8895 5.72125 18.2139 6.89937L21.7495 3.36375C19.517 1.28312 16.5308 0 13.2383 0C6.33516 0 0.738281 5.59688 0.738281 12.5C0.738281 19.4031 6.33516 25 13.2383 25C20.1414 25 25.7383 19.4031 25.7383 12.5C25.7383 11.6619 25.652 10.8438 25.4952 10.0519Z'
                                        fill='#FFC107'
                                    />
                                    <path
                                        d='M2.17969 6.68188L6.28656 9.69375C7.39781 6.9425 10.0891 5 13.2384 5C15.1503 5 16.8897 5.72125 18.2141 6.89937L21.7497 3.36375C19.5172 1.28312 16.5309 0 13.2384 0C8.43719 0 4.27344 2.71062 2.17969 6.68188Z'
                                        fill='#FF3D00'
                                    />
                                    <path
                                        d='M13.2382 24.9999C16.467 24.9999 19.4007 23.7643 21.6189 21.7549L17.7501 18.4812C16.4529 19.4677 14.8679 20.0012 13.2382 19.9999C9.98698 19.9999 7.22636 17.9268 6.18636 15.0337L2.11011 18.1743C4.17886 22.2224 8.38011 24.9999 13.2382 24.9999Z'
                                        fill='#4CAF50'
                                    />
                                    <path
                                        d='M25.4952 10.0519H24.4883V10H13.2383V15H20.3027C19.8097 16.3853 18.9216 17.5957 17.7483 18.4819L17.7502 18.4806L21.6189 21.7544C21.3452 22.0031 25.7383 18.75 25.7383 12.5C25.7383 11.6619 25.652 10.8438 25.4952 10.0519Z'
                                        fill='#1976D2'
                                    />
                                </svg>
                            </Link>
                            <Link href='#'>
                                <svg
                                    aria-hidden='true'
                                    aria-label='X Social Media'
                                    width='29'
                                    height='27'
                                    viewBox='0 0 29 27'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M4.73828 0C2.53203 0 0.738281 1.72969 0.738281 3.85714V23.1429C0.738281 25.2703 2.53203 27 4.73828 27H24.7383C26.9445 27 28.7383 25.2703 28.7383 23.1429V3.85714C28.7383 1.72969 26.9445 0 24.7383 0H4.73828ZM23.307 5.0625L16.8195 12.2103L24.4508 21.9375H18.4758L13.8008 16.0373L8.44453 21.9375H5.47578L12.4133 14.2895L5.09453 5.0625H11.2195L15.4508 10.4565L20.3383 5.0625H23.307ZM20.9445 20.2259L10.3258 6.68371H8.55703L19.2945 20.2259H20.9383H20.9445Z'
                                        fill='black'
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className='mt-4 flex items-center gap-2'>
                        <p className='text-sm text-muted-foreground'>Don’t have an account?</p>
                        <a href='#' className='text-[#008bd9] hover:underline'>
                            Create One
                        </a>
                    </div>
                </div>
                <div className='absolute p-6 bottom-0 right-0 w-1/2 h-full overflow-hidden rounded-lg'>
                    <Image src={image} alt='Illustration' className='w-full h-auto' />
                </div>
            </div>
        </main>
    );
};
