// Modules
import {
    MouseEvent, useCallback, useEffect, useRef, useState,
} from 'react';
// Components
import { Portal } from '../Portal/Portal';
// Utils
import { classNames } from 'shared/lib/utils';
// Consts
import { MODAL_ANIMATION_DELAY } from 'shared/lib/consts';
// Types
import { TModalProps } from './types';
// Styles
import styles from './Modal.module.scss';

export const Modal = ({
    className, children, onClose, isOpen,
}:TModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);

            timeRef.current = setTimeout(() => {
                onClose();

                setIsClosing(false);
            }, MODAL_ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClickHandler = (e:MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods = { [styles.Open]: isOpen, [styles.IsClosing]: isClosing };

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className])}>
                <div
                    className={styles.Overlay}
                    onClick={closeHandler}
                >
                    <div
                        className={styles.Content}
                        onClick={onContentClickHandler}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
