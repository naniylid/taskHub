import React from 'react';

export const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='flex overflow-hidden h-screen w-screen fixed top-0 left-0 z-50 bg-black bg-opacity-50 justify-center items-center '>
            {children}
        </div>
    );
};
