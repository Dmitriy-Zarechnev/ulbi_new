// Modules
import { DeepPartial } from '@reduxjs/toolkit';
// Utils
import { getCounter } from './getCounter';
// Types
import { TStateSchema } from 'app/providers/StoreProvider';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<TStateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as TStateSchema)).toEqual({ value: 10 });
    });
});
