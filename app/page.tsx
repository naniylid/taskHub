import { Container, Sidebar } from '@/shared/components/shared';

import { Dashboard } from '@/shared/components/shared/dashboard/Dashboard';
import { AddTask } from '@/shared/components/shared/edit-add-task/AddTask';
import { FullTask } from '@/shared/components/shared/FullTask';
import { Modal } from '@/shared/components/shared/modal/Modal';
import { MyTasks } from '@/shared/components/shared/my-tasks/MyTasks';
import { Settings } from '@/shared/components/shared/Settings';

export default function Home() {
    return (
        <div className='flex h-screen w-full mt-[180px]'>
            <Sidebar />

            <main className='flex-1  w-full justify-center items-center'>
                <Settings />
            </main>
        </div>
    );
}
