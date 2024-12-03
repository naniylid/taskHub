import { AddTask, Modal } from '@/shared/components/shared';
import React from 'react';

export default function EditTaskModal() {
    return <Modal children={<AddTask isEdit={true} />} />;
}
