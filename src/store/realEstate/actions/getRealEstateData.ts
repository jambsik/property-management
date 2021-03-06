import { FilterParams } from './../../../helpers/simulateBe';
import { fetchGetRealEstateData } from './../../../services/realEstateService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_REAL_ESTATE_DATA } from '../types';

export const getRealEstateDataAction = createAsyncThunk(
    GET_REAL_ESTATE_DATA,
    async ({ filterValues, page }: { filterValues?: FilterParams; page?: number }) => await fetchGetRealEstateData(filterValues, page)
);
