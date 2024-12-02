import Image from 'next/image';
import React from 'react';
import image from '@/public/register-image.jpg';
import { User, UserRoundPen, Mail, LockKeyhole, Lock } from 'lucide-react';

import { CheckboxCustom, FormInput } from '@/shared/components/shared';

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
                        <FormInput
                            icon={
                                <UserRoundPen className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                            }
                            id='firstname'
                            type='text'
                            placeholder='Enter First Name'
                        />
                        <FormInput
                            icon={
                                <UserRoundPen className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                            }
                            id='lastname'
                            type='text'
                            placeholder='Enter Last Name'
                        />
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
                                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                            }
                            id='email'
                            type='email'
                            placeholder='Enter Email'
                        />

                        <FormInput
                            icon={
                                <LockKeyhole className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                            }
                            id='password'
                            type='password'
                            placeholder='Enter Password'
                        />

                        <FormInput
                            icon={
                                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                            }
                            id='passwordConfirm'
                            type='password'
                            placeholder='Confirm Password'
                        />

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
