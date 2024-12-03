import { Header, Sidebar } from '@/shared/components/shared';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'TaskHub',
};

export default function HomeLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <>
            <Suspense>
                <Header />
            </Suspense>
            <div className='flex h-screen w-full mt-[130px]'>
                <Sidebar />

                <main className='flex-1  w-full justify-center items-center'>
                    {children}
                    {modal}
                </main>
            </div>
        </>
    );
}
