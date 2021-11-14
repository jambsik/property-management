import { GET_REAL_ESTATE_META_DATA } from './../types';
import { basicRealEstateItemDataMock } from '../../../__tests__/__fixtures__/realEstateDataMock';
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';

import { getRealEstateItemDataAction } from '../actions/getRealEstateItemData';
import { GET_REAL_ESTATE_DATA, GET_REAL_ESTATE_ITEM } from '../types';
import { getRealEstateDataAction } from '../actions/getRealEstateData';
import { realEstateInitialState } from '../realEstateSlice';
import reducer from '../realEstateSlice';
import { basicRealEstateItemsDataMock } from '../../../__tests__/__fixtures__/realEstateDataMock';
import { basicFiltersDataMock } from '../../../__tests__/__fixtures__/filtersDataMock';
import { getRealStateMetaDataAction } from '../actions/getRealEstateMetaData';

const axiosMock = axios as jest.Mocked<typeof axios>;

describe('Real estate slice test', () => {
    const store = configureStore({
        reducer,
    });

    beforeEach(() => {
        axiosMock.get.mockClear();
    });

    it('Should validate initial state', () => {
        const expected = reducer(undefined, {} as AnyAction);

        expect(expected).toEqual(realEstateInitialState);
    });

    describe('getRealEstateDataAction', () => {
        it('Should change state after receive payload', async () => {
            axiosMock.get.mockResolvedValue({
                data: {
                    data: basicRealEstateItemsDataMock,
                },
            });

            await store.dispatch(getRealEstateDataAction({}));

            const expectedState = {
                ...realEstateInitialState,
                items: basicRealEstateItemsDataMock,
                pagination: {
                    count: 1,
                },
            };

            expect(getRealEstateDataAction.fulfilled.type).toBe(`${GET_REAL_ESTATE_DATA}/fulfilled`);

            expect(store.getState()).toEqual(expectedState);
        });

        it('Should  not change state after rejected call', async () => {
            axiosMock.get.mockRejectedValue('Error');

            await store.dispatch(getRealEstateDataAction({}));

            expect(getRealEstateDataAction.fulfilled.type).toBe(`${GET_REAL_ESTATE_DATA}/fulfilled`);

            expect(store.getState()).toEqual(realEstateInitialState);
        });
    });

    describe('getRealEstateItemDataAction', () => {
        const itemTestId = '1';

        it('Should change state after receive payload', async () => {
            axiosMock.get.mockResolvedValue({
                data: {
                    data: basicRealEstateItemsDataMock,
                },
            });

            await store.dispatch(getRealEstateItemDataAction(itemTestId));

            const expectedState = {
                ...realEstateInitialState,
                item: basicRealEstateItemDataMock,
            };

            expect(getRealEstateItemDataAction.fulfilled.type).toBe(`${GET_REAL_ESTATE_ITEM}/fulfilled`);

            expect(store.getState()).toEqual(expectedState);
        });

        it('Should  not change state after rejected call', async () => {
            axiosMock.get.mockRejectedValue('Error');

            await store.dispatch(getRealEstateItemDataAction(itemTestId));

            expect(getRealEstateItemDataAction.fulfilled.type).toBe(`${GET_REAL_ESTATE_ITEM}/fulfilled`);

            expect(store.getState()).toEqual(realEstateInitialState);
        });
    });

    describe('getRealStateMetaDataAction', () => {
        it('Should  not change state after rejected call', async () => {
            axiosMock.get.mockRejectedValue('Error');

            await store.dispatch(getRealStateMetaDataAction());

            expect(getRealStateMetaDataAction.fulfilled.type).toBe(`${GET_REAL_ESTATE_META_DATA}/fulfilled`);

            expect(store.getState()).toEqual(realEstateInitialState);
        });
        it('Should change state after receive payload', async () => {
            axiosMock.get.mockResolvedValue({
                data: {
                    metaData: {
                        filters: basicFiltersDataMock,
                    },
                },
            });

            await store.dispatch(getRealStateMetaDataAction());

            const expectedState = {
                ...realEstateInitialState,
                filters: basicFiltersDataMock,
            };

            expect(getRealStateMetaDataAction.fulfilled.type).toBe(`${GET_REAL_ESTATE_META_DATA}/fulfilled`);

            expect(store.getState()).toEqual(expectedState);
        });
    });
});
