import Image from 'next/image';
import React from 'react';
import image from '@/public/register-image.jpg';
import { User, UserRoundPen, Mail, LockKeyhole, Lock } from 'lucide-react';
import { CheckboxCustom } from '../../ui/checkbox';

export const Register = () => {
    return (
        <main className='bg-primary bg-[url("/login-back.png")] flex justify-center items-center h-screen'>
            <div className='relative pt-3 pb-4 flex max-w-4xl w-full max-h-full  justify-between  bg-white dark:bg-card rounded-lg shadow-lg'>
                <div className='w-1/2'>
                    <Image src={image} alt='Login Image' />
                </div>
                <div className='p-8 max-w-md w-1/2'>
                    <h1 className='text-4xl font-bold mb-6 text-black'>Sign Up</h1>
                    <form className='flex flex-col gap-2'>
                        <div>
                            <label
                                className='block hidden text-sm font-medium text-muted-foreground'
                                htmlFor='firstname'
                            >
                                First Name
                            </label>
                            <div className='relative'>
                                <UserRoundPen className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                <input
                                    type='text'
                                    id='firstname'
                                    placeholder='Enter First Name'
                                    className='mt-1 block w-full p-2 border border-border rounded-md outline-none focus:ring focus:ring-ring pl-10'
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className='block hidden text-sm font-medium text-muted-foreground'
                                htmlFor='lastname'
                            >
                                Last Name
                            </label>
                            <div className='relative'>
                                <UserRoundPen className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                <input
                                    type='text'
                                    id='lastname'
                                    placeholder='Enter Last Name'
                                    className='mt-1 block w-full p-2 border border-border rounded-md outline-none focus:ring focus:ring-ring pl-10'
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className='block hidden text-sm font-medium text-muted-foreground'
                                htmlFor='username'
                            >
                                Username
                            </label>
                            <div className='relative'>
                                <User className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                <input
                                    type='text'
                                    id='username'
                                    placeholder='Enter Username'
                                    className='mt-1 block w-full p-2 border border-border rounded-md outline-none focus:ring focus:ring-ring pl-10'
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className='block hidden text-sm font-medium text-muted-foreground'
                                htmlFor='email'
                            >
                                Email
                            </label>
                            <div className='relative'>
                                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                <input
                                    type='email'
                                    id='email'
                                    placeholder='Enter Email'
                                    className='mt-1 block w-full p-2 border border-border rounded-md outline-none focus:ring focus:ring-ring pl-10'
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className='hidden block text-sm font-medium text-muted-foreground'
                                htmlFor='password'
                            >
                                Password
                            </label>
                            <div className='relative'>
                                <LockKeyhole className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Enter Password'
                                    className='mt-1 block w-full p-2 border border-border outline-none rounded-md focus:ring focus:ring-ring pl-10'
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className='hidden block text-sm font-medium text-muted-foreground'
                                htmlFor='passwordConfirm'
                            >
                                Confirm Password
                            </label>
                            <div className='relative'>
                                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                <input
                                    type='password'
                                    id='passwordConfirm'
                                    placeholder='Confirm Password'
                                    className='mt-1 block w-full p-2 border border-border outline-none rounded-md focus:ring focus:ring-ring pl-10'
                                    required
                                />
                            </div>
                        </div>
                        <CheckboxCustom className='mt-4' label='I agree to all terms' />
                        <button
                            type='submit'
                            className='w-full max-w-[130px] bg-primary text-primary-foreground  hover:opacity-80 p-2 rounded-md'
                        >
                            Register
                        </button>
                    </form>

                    <div className='mt-4 flex items-center gap-2'>
                        <p className='text-sm text-muted-foreground'>Already have an account? </p>
                        <a href='#' className='text-[#008bd9] hover:underline'>
                            Sign In
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};
