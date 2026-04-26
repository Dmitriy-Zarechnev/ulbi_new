// Modules
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// Decorators
import { ThemeDecorator } from '../../config';
// Components
import { Button } from './Button';
// Types
import { BUTTON_SIZE_ENUM, BUTTON_THEME_ENUM, THEME_ENUM } from '../../types';

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
    theme: BUTTON_THEME_ENUM.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: BUTTON_THEME_ENUM.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: BUTTON_THEME_ENUM.OUTLINE,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Text',
    theme: BUTTON_THEME_ENUM.OUTLINE,
    size: BUTTON_SIZE_ENUM.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: BUTTON_THEME_ENUM.OUTLINE,
    size: BUTTON_SIZE_ENUM.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    theme: BUTTON_THEME_ENUM.OUTLINE,
    size: BUTTON_SIZE_ENUM.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: BUTTON_THEME_ENUM.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: BUTTON_THEME_ENUM.BACKGROUND,
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Text',
    theme: BUTTON_THEME_ENUM.BACKGROUND_INVERTED,
};

export const SquareButtonM = Template.bind({});
SquareButtonM.args = {
    children: '>',
    theme: BUTTON_THEME_ENUM.BACKGROUND_INVERTED,
    square: true,
    size: BUTTON_SIZE_ENUM.M,
};

export const SquareButtonL = Template.bind({});
SquareButtonL.args = {
    children: '>',
    theme: BUTTON_THEME_ENUM.BACKGROUND_INVERTED,
    square: true,
    size: BUTTON_SIZE_ENUM.L,
};

export const SquareButtonXL = Template.bind({});
SquareButtonXL.args = {
    children: '>',
    theme: BUTTON_THEME_ENUM.BACKGROUND_INVERTED,
    square: true,
    size: BUTTON_SIZE_ENUM.XL,
};
