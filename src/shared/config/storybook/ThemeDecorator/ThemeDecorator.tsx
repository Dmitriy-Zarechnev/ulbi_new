// Modules
import { Story } from '@storybook/react';
// Components
import { ThemeProvider } from 'app/providers/ThemeProvider';
// Types
import { THEME_ENUM } from 'shared/types';

export const ThemeDecorator = (theme: THEME_ENUM) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
