import { Pagination } from './../constants/Pagination';
import { FilterParams, applyFilters, getNumberOfPages, findById } from './../helpers/simulateBe';
import axios from 'axios';

import { Endpoints } from './../constants/Endpoints';
import { RealEstate } from './../models/RealEstate';
import { Response } from '../models/Response';
import { applyPagination } from '../helpers/simulateBe';

export const API_URL = process.env.REACT_APP_API_URL;

export const fetchGetRealEstateData = (filters?: FilterParams, page = Pagination.DefaultPage): Promise<Response<RealEstate>> =>
    new Promise(async (resolve) => {
        try {
            const { data } = await axios.get(`${API_URL}/${Endpoints.RealEstate}`, {
                headers: {},
                params: {},
            });

            const response = data;
            const filteredData = filters ? applyFilters(filters, response.data) : response.data;
            const count = getNumberOfPages(filteredData.length);

            response.data = applyPagination<RealEstate>(filteredData, page, Pagination.DefaultLimit);

            response.metaData = {
                pagination: {
                    count,
                },
            };

            resolve(response);
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

export const fetchGetRealEstateItemData = (id: string): Promise<RealEstate | undefined> =>
    new Promise(async (resolve) => {
        try {
            const { data } = await axios.get(`${API_URL}/${Endpoints.RealEstate}`, {
                headers: {},
                params: {},
            });

            const response = data;

            resolve(findById<RealEstate>(parseInt(id), response.data));
        } catch (error) {
            resolve(undefined);
        }
    });
