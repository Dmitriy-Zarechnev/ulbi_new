// Modules
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Decorators
import { ThemeDecorator } from 'shared/config';
// Components
import { AppLink } from './AppLink';
// Types
import {APP_LINK_THEME_ENUM, THEME_ENUM} from "shared/types";

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: APP_LINK_THEME_ENUM.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: APP_LINK_THEME_ENUM.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    theme: APP_LINK_THEME_ENUM.RED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: APP_LINK_THEME_ENUM.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Text',
    theme: APP_LINK_THEME_ENUM.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'Text',
    theme: APP_LINK_THEME_ENUM.RED,
};
RedDark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];
