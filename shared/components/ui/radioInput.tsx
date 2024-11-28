import React from 'react';

interface RadioInputProps {
    id: string;
    name: string;
    label: string | React.ReactNode;
    value: string;
    checked?: boolean;
    // onChange: (value: string) => void;
    className?: string;
}

export const Radioinput: React.FC<RadioInputProps> = ({
    id,
    name,
    label,
    value,
    checked,
    // onChange,
    className = '',
}) => {
    return (
        <div className={`flex items-center space-x-3 ${className}`}>
            <label htmlFor={id} className='cursor-pointer text-sm text-gray-700 '>
                {label}
            </label>
            <input
                type='radio'
                id={id}
                name={name}
                value={value}
                checked={checked}
                // onChange={() => onChange(value)}
                className='w-5 h-5 cursor-pointer accent-blue-500 border-gray-300  focus:ring-blue-200'
            />
        </div>
    );
};
