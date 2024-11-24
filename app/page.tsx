import { Sidebar } from '@/shared/components/shared';

export default function Home() {
    return (
        <div className='flex'>
            <Sidebar />
            <main className='flex-1 p-8'>
                <h1 className='text-2xl font-bold'>Welcome to TaskHub</h1>
                {/* Контент */}
            </main>
        </div>
    );
}
