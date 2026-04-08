// Modules
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// Decorators
import { ThemeDecorator } from '../../config';
// Components
import { Button } from './Button';
// Types
import {THEME_BUTTON_ENUM, THEME_ENUM} from "../../types";

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: THEME_BUTTON_ENUM.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: THEME_BUTTON_ENUM.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: THEME_BUTTON_ENUM.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];
