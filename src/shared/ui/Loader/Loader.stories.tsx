// Modules
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Decorators
import { ThemeDecorator } from 'shared/config';
// Components
import { Loader } from './Loader';
// Types
import {THEME_ENUM} from "shared/types";

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];
