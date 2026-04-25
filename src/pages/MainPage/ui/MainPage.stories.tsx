// Modules
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Decorators
import { ThemeDecorator } from 'shared/config';
// Components
import MainPage from './MainPage';
// Types
import { THEME_ENUM } from 'shared/types';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];
