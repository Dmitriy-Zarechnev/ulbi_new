// Types
import { ButtonHTMLAttributes } from 'react';
import { BUTTON_SIZE_ENUM, BUTTON_THEME_ENUM } from '../../types';

export type TButtonProps ={
    className?: string,
    theme?:BUTTON_THEME_ENUM,
    square?: boolean,
    size?: BUTTON_SIZE_ENUM,
} & ButtonHTMLAttributes<HTMLButtonElement>
