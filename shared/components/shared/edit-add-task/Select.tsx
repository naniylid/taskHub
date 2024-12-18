'use client';

import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectComponentProps {
    label: string;
}

export const Select: React.FC<SelectComponentProps> = ({ label }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState<Option | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const options: Option[] = [
        { value: '', label: 'Select One' },
        { value: 'IN_PROGRESS', label: 'In Progress' },
        { value: 'NOT_STARTED', label: 'Not Started' },
        { value: 'COMPLETED', label: 'Completed' },
    ];

    return (
        <div className='relative w-full'>
            <label className=' w-full block text-base font-semibold text-gray-700 mb-1'>
                {label}
            </label>
            <div
                className='w-full border border-gray-300 rounded-md p-2 bg-white cursor-pointer dark:bg-[#2E2E2E] dark:placeholder:text-muted-foreground dark:focus-visible:ring-ring dark:focus-visible:ring-offset-0'
                onClick={toggleDropdown}
            >
                {selectedOption ? selectedOption.label : 'Select One'}
            </div>
            {isOpen && (
                <ul className='absolute w-full mt-1 border border-gray-300 bg-white rounded-md shadow-lg z-10 dark:bg-[#2E2E2E] dark:placeholder:text-muted-foreground dark:focus-visible:ring-ring dark:focus-visible:ring-offset-0'>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className='p-2 w-full text-sm hover:bg-primary hover:opacity-70 hover:text-white cursor-pointer'
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
