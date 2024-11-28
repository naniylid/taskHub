import { cn } from '@/shared/lib/utils';
import React from 'react';

export interface FormInputProps {
    id: string;
    icon: React.ReactNode;
    className?: string;
    type: string;
    placeholder: string;
}

export const FormInput: React.FC<FormInputProps> = ({ id, icon, className, type, placeholder }) => {
    return (
        <div>
            <label className='block hidden text-sm font-medium text-muted-foreground' htmlFor={id}>
                {placeholder}
            </label>
            <div className={cn('relative', className)}>
                {icon}
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className='mt-1 block w-full p-2 border border-border rounded-md outline-none focus:ring focus:ring-ring pl-10'
                    required
                />
            </div>
        </div>
    );
};
