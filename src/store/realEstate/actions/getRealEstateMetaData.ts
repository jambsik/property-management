import { fetchGetRealEstateMetaData } from './../../../services/realEstateService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_REAL_ESTATE_META_DATA } from '../types';

export const getRealStateMetaDataAction = createAsyncThunk(GET_REAL_ESTATE_META_DATA, async () => await fetchGetRealEstateMetaData());
