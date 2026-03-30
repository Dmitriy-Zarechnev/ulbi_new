// Types
import { LinkProps } from 'react-router-dom';
import { APP_LINK_THEME_ENUM } from '../../types';

export type TAppLinkProps ={
    className?: string,
    theme?: APP_LINK_THEME_ENUM
} & LinkProps
