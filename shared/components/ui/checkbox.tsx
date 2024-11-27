import React from 'react';

export const CheckboxCustom: React.FC<{ label: string; className?: string }> = ({
    label,
    className,
}) => {
    return (
        <div className={className}>
            <div className='mb-[0.125rem] flex gap-2 align-center items-center min-h-[1.5rem] '>
                <input
                    className="relative float-left h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[1px] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] checked:border-primary checked:bg-primary checked:after:absolute checked:after:top-[45%] checked:after:left-[53%] checked:after:-translate-x-[50%] checked:after:-translate-y-[50%] checked:after:block checked:after:h-[0.6rem] checked:after:w-[0.3rem] checked:after:rotate-45 checked:after:border-[2px] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:content-[''] hover:cursor-pointer focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                    type='checkbox'
                    value=''
                    id='checkboxChecked'
                    defaultChecked
                />
                <label className='hover:cursor-pointer text-sm' htmlFor='checkboxChecked'>
                    {label}
                </label>
            </div>
        </div>
    );
};
