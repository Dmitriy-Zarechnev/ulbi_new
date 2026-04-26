// Modules
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
// Decorators
import { ThemeDecorator } from 'shared/config';
// Components
import { Modal } from './Modal';
// Types
import { THEME_ENUM } from 'shared/types';

const modalTitle = 'Modal window';
const modalDescription = 'Storybook preview for the shared modal component.';

export default {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Modal>;

// TODO: не работает
const Template: ComponentStory<typeof Modal> = (args) => (
    <div
        style={{
            minHeight: '100vh',
            padding: '40px',
        }}
    >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Modal {...args}>
            <div style={{ display: 'grid', gap: '16px' }}>
                <h2 style={{ margin: 0 }}>{modalTitle}</h2>
                <p style={{ margin: 0 }}>
                    {modalDescription}
                </p>
            </div>
        </Modal>
    </div>
);

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    onClose: () => {},
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    onClose: () => {},
};
Dark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];
