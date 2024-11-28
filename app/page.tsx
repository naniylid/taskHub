import { Container, Sidebar } from '@/shared/components/shared';
import { AddTask } from '@/shared/components/shared/AddTask';
import { Dashboard } from '@/shared/components/shared/dashboard/Dashboard';
import { FullTask } from '@/shared/components/shared/FullTask';
import { Modal } from '@/shared/components/shared/modal/Modal';
import { MyTasks } from '@/shared/components/shared/my-tasks/MyTasks';

export default function Home() {
    return (
        <div className='flex h-screen w-full mt-[180px]'>
            <Sidebar />
            <Container>
                <main className='flex-1  w-full justify-center items-center'>
                    <Modal children={<AddTask />} />
                </main>
            </Container>
        </div>
    );
}
