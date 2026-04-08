// Modules
import { render, screen } from '@testing-library/react';
// Components
import { Button } from './Button';
// Types
import { THEME_BUTTON_ENUM } from '../../types';

describe('Button', () => {
    test('Render simple button', () => {
        render(<Button>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });

    test('Render simple button with clear theme', () => {
        render(<Button theme={THEME_BUTTON_ENUM.CLEAR}>Clear Button</Button>);
        expect(screen.getByText('Clear Button')).toHaveClass(THEME_BUTTON_ENUM.CLEAR);
    });
});
