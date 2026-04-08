// Modules
import { addDecorator } from '@storybook/react';
// Decorators
import { StyleDecorator, RouterDecorator , ThemeDecorator} from '../../src/shared/config';
// Types
import {THEME_ENUM} from "../../src/shared/types";

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(THEME_ENUM.LIGHT));
addDecorator(RouterDecorator);
