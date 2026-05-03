// Types
import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { TCounterSchema } from 'entities/Counter';

export type TStateSchema = {
    counter: TCounterSchema;
}

export type TStoreProviderProps = {
    children?: ReactNode;
    initialState?: DeepPartial<TStateSchema>;
}
