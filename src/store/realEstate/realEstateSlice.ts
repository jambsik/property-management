import { getRealEstateItemDataAction } from './actions/getRealEstateItemData';
import { getRealStateMetaDataAction } from './actions/getRealEstateMetaData';
import { ResponseFilter, ResponsePagination } from './../../models/Response';
import { RealEstate } from './../../models/RealEstate';
import { getRealEstateDataAction } from './actions/getRealEstateData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Response } from '../../models/Response';

export interface RealEstateSliceState {
    filters: Array<ResponseFilter>;
    items: Array<RealEstate>;
    pagination?: ResponsePagination;
    item?: RealEstate;
}
export const realEstateInitialState: RealEstateSliceState = {
    filters: [],
    items: [],
    pagination: undefined,
    item: undefined,
};

export const realEstateSlice = createSlice({
    name: 'realEstate',
    initialState: realEstateInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRealEstateItemDataAction.fulfilled, (state: RealEstateSliceState, action: PayloadAction<RealEstate | undefined>) => {
            state.item = action.payload;
        });

        builder.addCase(getRealEstateDataAction.fulfilled, (state: RealEstateSliceState, action: PayloadAction<Response<RealEstate>>) => {
            state.items = action.payload.data as Array<RealEstate>;
            state.pagination = action.payload.metaData?.pagination;
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

export const selectRealEstateItem = (state: RootState) => state.realEstate.item;

export const selectRealEstateFilters = (state: RootState) => state.realEstate.filters;

export const selectRealEstatePagination = (state: RootState) => state.realEstate.pagination;

export default realEstateSlice.reducer;
