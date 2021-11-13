import axios from 'axios';

import { Endpoints } from './../constants/Endpoints';
import { RealEstate } from './../models/RealEstate';
import { Response } from '../models/Response';

export const API_URL = process.env.REACT_APP_API_URL;

export const fetchGetRealEstateData = (): Promise<Response<RealEstate>> =>
    new Promise(async (resolve) => {
        try {
            const { data } = await axios.get(`${API_URL}/${Endpoints.RealEstate}`, {
                headers: {},
                params: {},
            });
            resolve(data);
        } catch (error) {
            resolve({
                data: [],
            });
        }
    });

export const fetchGetRealEstateMetaData = (): Promise<Response<void>> =>
    new Promise(async (resolve) => {
        try {
            const { data } = await axios.get(`${API_URL}/${Endpoints.RealEstateFilters}`, {
                headers: {},
                params: {},
            });
            resolve(data);
        } catch (error) {
            resolve({
                data: [],
            });
        }
    });
