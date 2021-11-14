import React from 'react';
import * as realEstateService from '../../../services/realEstateService';
import { realEstateInitialState } from '../../../store/realEstate/realEstateSlice';
import { basicFiltersDataMock } from '../../../__tests__/__fixtures__/filtersDataMock';
import { basicRealEstateItemsDataMock } from '../../../__tests__/__fixtures__/realEstateDataMock';

import { storeRender, fireEvent } from '../../../__tests__/__utils__/reduxHelper';
import { addTestProviders } from '../../../__tests__/__utils__/renderHelper';
import RealEstate from '../RealEstate';

describe('Real Estate container test', () => {
    const getRealEstateDataActionSpy = jest.spyOn(realEstateService, 'fetchGetRealEstateData');
    const getRealStateMetaDataActionSpy = jest.spyOn(realEstateService, 'fetchGetRealEstateMetaData');

    beforeEach(() => jest.clearAllMocks());

    const pageObject = {
        streetFilter: 'input[id="street"]',
        iconButton: 'filter-box-button',
        pageTwo: 2,
    };

    beforeEach(() => jest.clearAllMocks());
    it('Should render component without errors', () => {
        const { container } = storeRender(<RealEstate />);

        expect(container).toMatchSnapshot();
    });

    it('Should get metaData filters on init', () => {
        storeRender(<RealEstate />);

        expect(getRealStateMetaDataActionSpy).toHaveBeenCalledTimes(1);
    });

    it('Should getData without filters', () => {
        const { getByTestId } = storeRender(<RealEstate />, {
            preloadedState: {
                realEstate: {
                    ...realEstateInitialState,
                    filters: basicFiltersDataMock,
                },
            },
        });

        fireEvent.click(getByTestId(pageObject.iconButton));

        expect(getRealEstateDataActionSpy).toHaveBeenCalledTimes(1);
        expect(getRealEstateDataActionSpy).toHaveBeenCalledWith({}, undefined);
    });

    it('Should getData with street filter', () => {
        const { container, getByTestId } = storeRender(<RealEstate />, {
            preloadedState: {
                realEstate: {
                    ...realEstateInitialState,
                    filters: basicFiltersDataMock,
                },
            },
        });
        const streetInput = container.querySelector(pageObject.streetFilter);

        expect(streetInput).toBeInTheDocument();

        fireEvent.change(streetInput!, {
            target: {
                value: 'Pave',
            },
        });
        fireEvent.click(getByTestId(pageObject.iconButton));

        expect(getRealEstateDataActionSpy).toHaveBeenCalledTimes(1);
        expect(getRealEstateDataActionSpy).toHaveBeenCalledWith({ street: 'Pave' }, undefined);
    });

    it('Should can change the page if click in pagination footer', () => {
        const { queryByText } = storeRender(addTestProviders(<RealEstate />), {
            preloadedState: {
                realEstate: {
                    ...realEstateInitialState,
                    items: basicRealEstateItemsDataMock,
                    pagination: {
                        count: 24,
                    },
                },
            },
        });

        const pageElement = queryByText(pageObject.pageTwo, {
            selector: 'button',
        });

        expect(pageElement).toBeInTheDocument();

        fireEvent.click(pageElement!);

        expect(getRealEstateDataActionSpy).toHaveBeenCalledTimes(1);
    });
});
