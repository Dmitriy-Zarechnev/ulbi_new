// Modules
import { Story } from '@storybook/react';
// Types
import {THEME_ENUM} from "shared/types";

export const ThemeDecorator = (theme: THEME_ENUM) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
