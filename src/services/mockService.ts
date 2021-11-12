import axios from 'axios';
import { Endpoints } from './../constants/Endpoints';
import { MockModel } from './../models/MockModel';

export const API_URL = process.env.REACT_APP_MOCK_API_URL;

export const getMockData = (): Promise<MockModel | null> =>
    new Promise(async (resolve) => {
        console.log(`${API_URL}/${Endpoints.MockUrl}`);
        try {
            const { data } = await axios.get(`${API_URL}/${Endpoints.MockUrl}`, {
                headers: {},
                params: {},
            });

            resolve(data);
        } catch (error) {
            resolve(null);
        }
    });
