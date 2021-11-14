import React from 'react';

import RealEstateDetail from '../RealEstateDetail';
import { storeRender } from '../../../__tests__/__utils__/reduxHelper';
import { useTranslation } from 'react-i18next';
import { realEstateInitialState } from '../../../store/realEstate/realEstateSlice';
import { basicRealEstateItemDataMock } from '../../../__tests__/__fixtures__/realEstateDataMock';
import * as storeAction from '../../../store/realEstate/actions/getRealEstateItemData';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useParams: () => ({
        id: '1',
    }),
}));

describe('Real Estate Detail Container test', () => {
    const { t } = useTranslation();

    const pageObject = {
        tryAgain: t('realEstate.detail.tryAgain'),
        tableSaleCondition: 'table-salecondition',
        tableSalePrice: 'table-saleprice',
    };
    it('Should render component without errors', () => {
        const { container } = storeRender(<RealEstateDetail />, {
            preloadedState: {
                realEstate: {
                    ...realEstateInitialState,
                    item: basicRealEstateItemDataMock,
                },
            },
        });
        expect(container).toMatchSnapshot();
    });

    it('Should render try again page if not have valid id item', () => {
        const { getByText } = storeRender(<RealEstateDetail />);

        expect(getByText(pageObject.tryAgain)).toBeInTheDocument();
    });

    it('Should render item data if has data', () => {
        const { getByTestId } = storeRender(<RealEstateDetail />, {
            preloadedState: {
                realEstate: {
                    ...realEstateInitialState,
                    item: basicRealEstateItemDataMock,
                },
            },
        });

        expect(getByTestId(pageObject.tableSaleCondition)).toBeInTheDocument();
        expect(getByTestId(pageObject.tableSalePrice)).toBeInTheDocument();
    });

    it('Should dispatch getRealEstateItemData action', () => {
        const getRealEstateItemDataSpy = jest.spyOn(storeAction, 'getRealEstateItemDataAction');

        storeRender(<RealEstateDetail />);

        expect(getRealEstateItemDataSpy).toHaveBeenCalledTimes(1);
    });
});
