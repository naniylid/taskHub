'use client';

import React from 'react';
import Image from 'next/image';
import { FormProvider, useForm } from 'react-hook-form';
import { redirect } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { TFormLoginValues, formLoginSchema } from './schemas';
import { User, LockKeyhole } from 'lucide-react';
import image from '@/public/login-image.jpg';
import { CheckboxCustom, FormInput } from '@/shared/components/shared';
import { LoginWith } from './LoginWith';
import { useRouter } from 'next/navigation';

export const Login = () => {
    const router = useRouter();
    const form = useForm<TFormLoginValues>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: TFormLoginValues) => {
        try {
            const resp = await signIn('credentials', {
                ...data,
                redirect: false,
            });

            console.log('SignIn Response:', resp);

            if (!resp?.ok) {
                throw Error();
            }

            toast.success('You successfully logged in', {
                icon: '✅',
            });
            router.replace('/home');
        } catch (error) {
            console.error('Error [LOGIN]', { errorDetails: error });
            toast.error('Unable to log in', {
                icon: '❌',
            });
        }
    };

    const handleSignupRedirect = () => {
        router.push('/signup');
    };

    return (
        <FormProvider {...form}>
            <main className='bg-primary bg-[url("/login-back.png")] flex justify-center items-center h-screen'>
                <div className='relative pt-10 pb-9 flex max-w-4xl w-full max-h-full items-center justify-between  bg-white dark:bg-card rounded-lg shadow-lg '>
                    <div className='p-8 max-w-md w-1/2'>
                        <h1 className='text-4xl font-bold mb-6 text-black'>Sign In</h1>
                        <form
                            className='flex flex-col gap-4'
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <FormInput
                                icon={
                                    <User className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4' />
                                }
                                id='email'
                                type='email'
                                placeholder='Enter Username'
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

                            <CheckboxCustom label='Remember me' />
                            <button
                                type='submit'
                                disabled={form.formState.isSubmitting}
                                className='w-full max-w-[130px] bg-primary text-primary-foreground  hover:opacity-80 p-2 rounded-md'
                            >
                                Login
                            </button>
                        </form>
                        <LoginWith />
                        <div className='mt-4 flex items-center gap-2'>
                            <p className='text-sm text-muted-foreground'>Don’t have an account?</p>
                            <button
                                onClick={handleSignupRedirect}
                                className='text-[#008bd9] hover:underline cursor-pointer'
                            >
                                Create One
                            </button>
                        </div>
                    </div>
                    <div className='absolute p-6 bottom-0 right-0 w-1/2 h-full overflow-hidden rounded-lg'>
                        <Image src={image} alt='Illustration' className='w-full h-auto' />
                    </div>
                </div>
            </main>
        </FormProvider>
    );
};
