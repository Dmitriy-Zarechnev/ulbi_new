// Modules
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Decorators
import { ThemeDecorator } from 'shared/config';
// Components
import { ThemeSwitcher } from './ThemeSwitcher';
// Types
import { THEME_ENUM } from 'shared/types';

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];
