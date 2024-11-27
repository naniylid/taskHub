import { Sidebar } from '@/shared/components/shared';
import { Dashboard } from '@/shared/components/shared/dashboard/Dashboard';
import { Register } from '@/shared/components/shared/login/Register';

export default function Home() {
    return (
        <Register />
        // <div className='flex h-screen w-full mt-[180px]'>
        //     <Sidebar />
        //     <main className='flex-1 w-full justify-center items-center'>
        //         <Dashboard />
        //     </main>
        // </div>
    );
}
