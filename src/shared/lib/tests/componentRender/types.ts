// Modules
import { DeepPartial } from '@reduxjs/toolkit';
// Types
import { TStateSchema } from 'app/providers/StoreProvider';

export type TComponentRenderOptions = {
    route?: string;
    initialState?: DeepPartial<TStateSchema>;
}
