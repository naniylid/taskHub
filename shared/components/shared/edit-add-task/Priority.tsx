import React from 'react';
import { Radioinput } from '../../ui/radioInput';

export const Priority: React.FC = () => {
    return (
        <div>
            <p className='block text-base font-semibold text-muted-foreground'>Priority</p>
            <div className='flex gap-5 items-center mt-1 '>
                <Radioinput
                    id='HIGH'
                    name='HIGH'
                    className='text-sm text-[#a1a3ab]'
                    label={
                        <p>
                            <span className='text-[#FF0000]'>&#8226; </span>
                            High
                        </p>
                    }
                    value=''
                />
                <Radioinput
                    id='MEDIUM'
                    name='MEDIUM'
                    className='text-sm text-[#a1a3ab]'
                    label={
                        <p>
                            <span className='text-[#3abeff]'>&#8226; </span>
                            Medium
                        </p>
                    }
                    value=''
                />
                <Radioinput
                    id='LOW'
                    name='LOW'
                    className='text-sm text-[#a1a3ab] '
                    label={
                        <p>
                            <span className='text-[#05a301]'>&#8226; </span>
                            Low
                        </p>
                    }
                    value=''
                />
            </div>
        </div>
    );
};
