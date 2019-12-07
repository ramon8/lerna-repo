import React from 'react';
import { Modal } from './components';

export default { title: 'Modals' };

export const modalExample = () => {
    return (
        <div>
            <Modal show="true" closeable="true">
                <div>Hola</div>
            </Modal>
        </div>
    )
};