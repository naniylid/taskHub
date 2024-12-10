'use client';

import Image from 'next/image';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { TFormRegisterValues, formRegisterSchema } from './schemas';
import image from '@/public/register-image.jpg';
import { User, UserRoundPen, Mail, LockKeyhole, Lock } from 'lucide-react';

import { CheckboxCustom, FormInput } from '@/shared/components/shared';
import { registerUser } from '@/app/actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Register = () => {
    const router = useRouter();
    const form = useForm<TFormRegisterValues>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = async (data: TFormRegisterValues) => {
        console.log('Submitting data to registerUser:', data);
        try {
            await registerUser({
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                username: data.username,
                password: data.password,
            });

            toast.success('Регистрация успешна 📝. Подтвердите свою почту', {
                icon: '✅',
            });

            router.replace('/home');
        } catch (error) {
            console.log('Error during registration:', error);
            toast.error('Неверный E-Mail или пароль', {
                icon: '❌',
            });
        }
    };

    return (
        <FormProvider {...form}>
            <main className='bg-primary bg-[url("/login-back.png")] flex justify-center items-center h-screen'>
                <div className='relative pt-3 pb-4 flex max-w-4xl w-full max-h-full  justify-between  bg-white dark:bg-card rounded-lg shadow-lg'>
                    <div className='w-1/2'>
                        <Image src={image} alt='Login Image' />
                    </div>
                    <div className='p-8 max-w-md w-1/2'>
                        <h1 className='text-4xl font-bold mb-6 text-black'>Sign Up</h1>
                        <form
                            className='flex flex-col gap-2'
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <FormInput
                                icon={
                                    <UserRoundPen className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                }
                                id='firstName'
                                type='text'
                                placeholder='Enter First Name'
                                {...form.register('firstName')}
                            />
                            <FormInput
                                icon={
                                    <UserRoundPen className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                }
                                id='lastName'
                                type='text'
                                placeholder='Enter Last Name'
                                {...form.register('lastName')}
                            />
                            <FormInput
                                icon={
                                    <User className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                }
                                id='username'
                                type='text'
                                placeholder='Enter Username'
                                {...form.register('username')}
                            />

                            <FormInput
                                icon={
                                    <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                }
                                id='email'
                                type='email'
                                placeholder='Enter Email'
                                {...form.register('email')}
                            />

                            <FormInput
                                icon={
                                    <LockKeyhole className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                }
                                id='password'
                                type='password'
                                placeholder='Enter Password'
                                {...form.register('password')}
                            />

                            <FormInput
                                icon={
                                    <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                }
                                id='confirmPassword'
                                type='password'
                                placeholder='Confirm Password'
                                {...form.register('confirmPassword')}
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
                            <p className='text-sm text-muted-foreground'>
                                Already have an account?{' '}
                            </p>
                            <Link href='/signin' className='text-[#008bd9] hover:underline'>
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </FormProvider>
    );
};
