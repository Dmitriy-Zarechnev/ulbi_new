// Modules
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// Decorators
import { ThemeDecorator } from 'shared/config';
// Components
import { NavBar } from './NavBar';
// Types
import { THEME_ENUM } from 'shared/types';

export default {
    title: 'widget/NavBar',
    component: NavBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];
