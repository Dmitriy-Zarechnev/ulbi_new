// Modules
import { render, screen } from '@testing-library/react';
// Components
import { Button } from './Button';
// Types
import { BUTTON_THEME_ENUM } from '../../types';

describe('Button', () => {
    test('Render simple button', () => {
        render(<Button>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });

    test('Render simple button with clear theme', () => {
        render(<Button theme={BUTTON_THEME_ENUM.CLEAR}>Clear Button</Button>);
        expect(screen.getByText('Clear Button')).toHaveClass(BUTTON_THEME_ENUM.CLEAR);
    });
});
