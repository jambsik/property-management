import { fetchGetRealEstateItemData } from './../../../services/realEstateService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_REAL_ESTATE_ITEM } from '../types';

export const getRealEstateItemDataAction = createAsyncThunk(GET_REAL_ESTATE_ITEM, async (id: string) => await fetchGetRealEstateItemData(id));
