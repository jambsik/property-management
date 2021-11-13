import { getRealStateMetaDataAction } from './actions/getRealEstateMetaData';
import { ResponseFilter } from './../../models/Response';
import { RealEstate } from './../../models/RealEstate';
import { getRealEstateDataAction } from './actions/getRealEstateData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Response } from '../../models/Response';

export interface RealEstateSliceState {
    filters: Array<ResponseFilter>;
    items: Array<RealEstate>;
}
const initialState: RealEstateSliceState = {
    filters: [],
    items: [],
};

export const realEstateSlice = createSlice({
    name: 'realEstate',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRealEstateDataAction.fulfilled, (state: RealEstateSliceState, action: PayloadAction<Response<RealEstate>>) => {
            state.items = action.payload.data as Array<RealEstate>;
        });

        builder.addCase(getRealStateMetaDataAction.fulfilled, (state: RealEstateSliceState, action: PayloadAction<Response<void>>) => {
            const hasFilters = action.payload.metaData?.filters;

            if (hasFilters) {
                state.filters = action.payload.metaData?.filters!;
            }
        });
    },
});

export const actions = realEstateSlice.actions;

export const selectRealEstateItems = (state: RootState) => state.realEstate.items;
export const selectRealEstateFilters = (state: RootState) => state.realEstate.filters;

export default realEstateSlice.reducer;
