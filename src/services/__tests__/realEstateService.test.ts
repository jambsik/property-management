import { RealEstate } from './../../models/RealEstate';
import { fetchGetRealEstateData, fetchGetRealEstateMetaData, fetchGetRealEstateItemData } from './../realEstateService';
import { basicRealEstateItemsDataMock, basicRealEstateItemDataMock } from './../../__tests__/__fixtures__/realEstateDataMock';
import axios from 'axios';
import { Response } from '../../models/Response';
import { basicFiltersDataMock } from '../../__tests__/__fixtures__/filtersDataMock';

const axiosMock = axios as jest.Mocked<typeof axios>;
describe('Real Estate Service test', () => {
    const mockedResponse: Response<RealEstate> = {
        data: basicRealEstateItemsDataMock,
    };
    describe('fetchGetRealEstateData cases', () => {
        beforeEach(() => {
            axiosMock.get.mockClear();
        });

        it('Should validate request config', async () => {
            axiosMock.get.mockResolvedValue({
                data: mockedResponse,
            });

            await fetchGetRealEstateData();

            expect(axiosMock.get).toHaveBeenCalledTimes(1);
            expect(axiosMock.get).toHaveBeenCalledWith('http://localhost:3000//api/real-estate.json', { headers: {}, params: {} });
        });

        it('Should return data on success', async () => {
            axiosMock.get.mockResolvedValue({
                data: mockedResponse,
            });
            const expectedResponse: Response<RealEstate> = {
                data: basicRealEstateItemsDataMock,
                metaData: {
                    pagination: {
                        count: 1,
                    },
                },
            };

            expect(await fetchGetRealEstateData()).toEqual(expectedResponse);
        });

        it('Should return empty data if response is rejected', async () => {
            axiosMock.get.mockRejectedValue('Error');
            const expectedResponse: Response<RealEstate> = {
                data: [],
            };

            expect(await fetchGetRealEstateData()).toEqual(expectedResponse);
        });
    });

    describe('fetchGetRealEstateMetaData cases', () => {
        it('Should validate request config', async () => {
            axiosMock.get.mockResolvedValue({
                data: mockedResponse,
            });

            await fetchGetRealEstateMetaData();

            expect(axiosMock.get).toHaveBeenCalledTimes(1);
            expect(axiosMock.get).toHaveBeenCalledWith('http://localhost:3000//api/real-estate-filters.json', { headers: {}, params: {} });
        });
        it('Should return data on success', async () => {
            axiosMock.get.mockResolvedValue({
                data: {
                    metaData: {
                        filters: basicFiltersDataMock,
                    },
                },
            });

            expect(await fetchGetRealEstateMetaData()).toEqual({
                metaData: {
                    filters: basicFiltersDataMock,
                },
            });
        });

        it('Should return empty data if response is rejected', async () => {
            axiosMock.get.mockRejectedValue('Error');

            expect(await fetchGetRealEstateMetaData()).toEqual({ data: [] });
        });
    });

    describe('fetchGetRealEstateItemData test cases', () => {
        const itemTestId = '1';
        it('Should validate request config', async () => {
            axiosMock.get.mockResolvedValue({
                data: mockedResponse,
            });

            await fetchGetRealEstateItemData(itemTestId);

            expect(axiosMock.get).toHaveBeenCalledTimes(1);
            expect(axiosMock.get).toHaveBeenCalledWith('http://localhost:3000//api/real-estate.json', { headers: {}, params: {} });
        });

        it('Should return data on success', async () => {
            axiosMock.get.mockResolvedValue({
                data: {
                    data: basicRealEstateItemsDataMock,
                },
            });

            expect(await fetchGetRealEstateItemData(itemTestId)).toEqual(basicRealEstateItemDataMock);
        });

        it('Should return empty data if response is rejected', async () => {
            axiosMock.get.mockRejectedValue('Error');

            expect(await fetchGetRealEstateItemData(itemTestId)).toBeUndefined();
        });
    });
});
