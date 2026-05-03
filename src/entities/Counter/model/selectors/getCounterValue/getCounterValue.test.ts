// Modules
import { DeepPartial } from '@reduxjs/toolkit';
// Utils
import { getCounterValue } from './getCounterValue';
// Types
import { TStateSchema } from 'app/providers/StoreProvider';

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<TStateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as TStateSchema)).toEqual(10);
    });
});
