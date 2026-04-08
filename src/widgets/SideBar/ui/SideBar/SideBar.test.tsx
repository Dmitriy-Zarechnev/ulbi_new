// Modules
import { fireEvent, screen } from '@testing-library/react';
// Tests
import { renderWithTranslation } from 'shared/lib/tests';
// Components
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('Render sidebar', () => {
        renderWithTranslation(<SideBar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        renderWithTranslation(<SideBar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('Collapsed');
    });
});
