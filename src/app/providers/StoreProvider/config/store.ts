// Modules
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
// Types
import { TStateSchema } from '../types';

export function createReduxStore(initialState?: TStateSchema) {
    return configureStore<TStateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
