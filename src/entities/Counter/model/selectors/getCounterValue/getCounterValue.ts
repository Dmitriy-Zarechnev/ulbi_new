// Modules
import { createSelector } from '@reduxjs/toolkit';
// Utils
import { getCounter } from '../getCounter/getCounter';
// Types
import { TCounterSchema } from '../../types/types';

export const getCounterValue = createSelector(
    getCounter,
    (counter: TCounterSchema) => counter.value,
);
