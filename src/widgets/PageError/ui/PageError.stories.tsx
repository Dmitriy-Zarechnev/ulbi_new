// Modules
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// Decorators
import { ThemeDecorator } from 'shared/config';
// Components
import { PageError } from './PageError';
// Types
import { THEME_ENUM } from 'shared/types';

export default {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = () => <PageError />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEME_ENUM.DARK)];
