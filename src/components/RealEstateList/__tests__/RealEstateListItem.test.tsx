import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RealEstateListItem from '../RealEstateListItem';
import { addTestProviders } from '../../../__tests__/__utils__/renderHelper';
import { basicRealEstateItemDataMock } from '../../../__tests__/__fixtures__/realEstateDataMock';
import { getDetailPathRoute } from '../../../config/routes';

describe('Real state item list test', () => {
    const pageObject = {
        root: `list-item-${basicRealEstateItemDataMock.id}`,
    };

    it('Should render component without errors', () => {
        const { container } = render(addTestProviders(<RealEstateListItem item={basicRealEstateItemDataMock} />));
        expect(container).toMatchSnapshot();
    });

    it('Should render item content', () => {
        const { queryByText } = render(addTestProviders(<RealEstateListItem item={basicRealEstateItemDataMock} />));

        const streetElement = queryByText(basicRealEstateItemDataMock.street);
        const yearBuiltElement = queryByText(basicRealEstateItemDataMock.yearbuilt);
        const salePriceElement = queryByText(basicRealEstateItemDataMock.saleprice);

        expect(streetElement).toBeInTheDocument();
        expect(yearBuiltElement).toBeInTheDocument();
        expect(salePriceElement).toBeInTheDocument();

        expect(streetElement).toHaveTextContent(`${basicRealEstateItemDataMock.street}`);
        expect(yearBuiltElement).toHaveTextContent(`${basicRealEstateItemDataMock.yearbuilt}`);
        expect(salePriceElement).toHaveTextContent(`${basicRealEstateItemDataMock.saleprice}`);
    });

    it('Should navigate to detail page after click on item', () => {
        expect(window.location.href).toEqual('http://localhost/');

        const { getByTestId } = render(addTestProviders(<RealEstateListItem item={basicRealEstateItemDataMock} />));

        fireEvent.click(getByTestId(pageObject.root));

        expect(window.location.href).toEqual(`http://localhost${getDetailPathRoute(basicRealEstateItemDataMock.id)}`);
    });
});
