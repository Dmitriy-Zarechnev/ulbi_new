// Modules
import { createPortal } from 'react-dom';
// Types
import { TPortalProps } from './types';

export const Portal = ({ children, element }:TPortalProps) => {
    const appRoots = document.querySelectorAll('.app');
    const appContainer = appRoots[appRoots.length - 1] as HTMLElement | undefined;
    const portalContainer = element ?? appContainer ?? document.body;

    return createPortal(children, portalContainer);
};
