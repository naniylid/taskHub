import React from 'react';

interface Props {
    status: string;
}

export const TaskCard: React.FC<Props> = ({ status }) => {
    return (
        <div className='taskCard border border-gray-400 rounded-2xl max-w-[402px] px-2'>
            <div className='taskCard__wrapper flex  justify-between'>
                <div className='progress-round py-3'>
                    <svg
                        aria-hidden='true'
                        aria-label='Task Status Round'
                        width='14'
                        height='15'
                        viewBox='0 0 14 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M1 7.67126C1 9.26256 1.63214 10.7887 2.75736 11.9139C3.88258 13.0391 5.4087 13.6713 7 13.6713C8.5913 13.6713 10.1174 13.0391 11.2426 11.9139C12.3679 10.7887 13 9.26256 13 7.67126C13 6.07997 12.3679 4.55384 11.2426 3.42862C10.1174 2.30341 8.5913 1.67126 7 1.67126C5.4087 1.67126 3.88258 2.30341 2.75736 3.42862C1.63214 4.55384 1 6.07997 1 7.67126Z'
                            stroke='#F21E1E'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </svg>
                </div>
                <div className='task-title max-w-[250px] py-3'>
                    <h3 className='font-semibold text-base overflow-hidden overflow-ellipsis whitespace-nowrap'>
                        Attend Nischal’s Birthday Party
                    </h3>
                </div>
                <div className='task-settings'>
                    <button>
                        <svg
                            width='16'
                            height='5'
                            viewBox='0 0 16 5'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2.57444 4.31134C3.44398 4.31134 4.14888 3.49648 4.14888 2.4913C4.14888 1.48612 3.44398 0.671265 2.57444 0.671265C1.7049 0.671265 1 1.48612 1 2.4913C1 3.49648 1.7049 4.31134 2.57444 4.31134Z'
                                stroke='#A1A3AB'
                            />
                            <path
                                d='M8.08518 4.31134C8.95472 4.31134 9.65963 3.49648 9.65963 2.4913C9.65963 1.48612 8.95472 0.671265 8.08518 0.671265C7.21564 0.671265 6.51074 1.48612 6.51074 2.4913C6.51074 3.49648 7.21564 4.31134 8.08518 4.31134Z'
                                stroke='#A1A3AB'
                            />
                            <path
                                d='M13.5954 4.31134C14.465 4.31134 15.1699 3.49648 15.1699 2.4913C15.1699 1.48612 14.465 0.671265 13.5954 0.671265C12.7259 0.671265 12.021 1.48612 12.021 2.4913C12.021 3.49648 12.7259 4.31134 13.5954 4.31134Z'
                                stroke='#A1A3AB'
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='taskCard__text line-clamp-3 max-h-[55px]'>
                <p className='text-sm text-center font-normal text-[#747474]'>
                    Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh
                    Elements).....
                </p>
            </div>

            <div className='taskCard__bottom flex justify-between text-xs py-3'>
                <div className='taskCard__time'>
                    <p>
                        Priority: <span className='text-[#42ade2]'>Moderate</span>{' '}
                    </p>
                </div>
                <div className='taskCard__status'>
                    <p>
                        Status: <span className='text-inProgressColor'>{status}</span>{' '}
                    </p>
                </div>
                <div className='taskCard__date'>
                    <p className='text-[#a1a3ab]'>
                        Created on: {new Date().toLocaleDateString('en-GB')}
                    </p>
                </div>
            </div>
        </div>
    );
};
