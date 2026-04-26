// Modules
import { fireEvent, screen } from '@testing-library/react';
// Tests
import { componentRender } from 'shared/lib/tests';
// Components
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('Render sidebar', () => {
        componentRender(<SideBar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        componentRender(<SideBar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('Collapsed');
    });
});
