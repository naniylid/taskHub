import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export const Settings = () => {
    return (
        <section className='mx-10  border border-gray-300 rounded-2xl shadow-md p-5'>
            <h1 className='text-xl font-semibold underline decoration-primary underline-offset-4 decoration-2'>
                Account Information
            </h1>

            <div className='py-8'>
                <h2 className='text- font-semibold'>Sundar Gurung</h2>
                <p className='text-sm '>sundargurung360@gmail.com</p>
            </div>
            <form className='flex flex-col gap-2 border border-gray-300 rounded-2xl p-5'>
                <label
                    className='block text-sm font-medium text-muted-foreground'
                    htmlFor='firstName'
                >
                    First Name
                </label>
                <Input
                    className='p-2 border border-gray-300 rounded-md'
                    type='text'
                    id='firstName'
                />

                <label
                    className='block text-sm font-medium text-muted-foreground mt-2'
                    htmlFor='lastName'
                >
                    Last Name
                </label>
                <Input
                    className='p-2 border border-gray-300 rounded-md'
                    type='text'
                    id='lastName'
                />

                <label
                    className='block text-sm font-medium text-muted-foreground mt-2'
                    htmlFor='email'
                >
                    Email Address
                </label>
                <Input className='p-2 border border-gray-300 rounded-md' type='email' id='email' />

                <label
                    className='block text-sm font-medium text-muted-foreground mt-2'
                    htmlFor='contactNumber'
                >
                    Contact Number
                </label>
                <Input
                    className='p-2 border border-gray-300 rounded-md'
                    type='tel'
                    id='contactNumber'
                    pattern='[0-9]{10}'
                    placeholder='Enter your contact number'
                />

                <label
                    className='block text-sm font-medium text-muted-foreground mt-2'
                    htmlFor='position'
                >
                    Position
                </label>
                <Input
                    className='p-2 border border-gray-300 rounded-md'
                    type='text'
                    id='position'
                    placeholder='Enter your position'
                />

                <div className='mt-4 flex gap-2 w-1/3'>
                    <Button type='submit' className='w-1/2' variant='default'>
                        Save Changes
                    </Button>
                    <Button className='w-1/2' variant='default'>
                        Cancel
                    </Button>
                </div>
            </form>
        </section>
    );
};
