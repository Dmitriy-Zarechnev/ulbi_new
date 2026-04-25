// Modules
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Decorators
import { ThemeDecorator } from 'shared/config';
// Components
import { NotFoundPage } from './NotFoundPage';
// Types
import { THEME_ENUM } from 'shared/types';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];
