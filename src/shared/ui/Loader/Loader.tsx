// Utils
import { classNames } from '../../lib/utils';
// Types
import { TLoaderProps } from './types';
// Styles
import './Loader.scss';

export const Loader = ({ className }:TLoaderProps) => (
    <div className={classNames('lds-default', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
