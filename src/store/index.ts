import { configureStore } from '@reduxjs/toolkit';
import realEstate from './realEstate/realEstateSlice';

export const store = configureStore({
    reducer: {
        realEstate,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
