// Modules
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// Decorators
import { ThemeDecorator } from 'shared/config';
// Components
import { SideBar } from './SideBar';
// Types
import { THEME_ENUM } from 'shared/types';

export default {
    title: 'widget/SideBar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];
