import { AddTask, Modal } from '@/shared/components/shared';
import React from 'react';

export default function AddTaskModal() {
    return <Modal children={<AddTask />} />;
}
