import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { basicRealEstateItemsDataMock } from '../../../__tests__/__fixtures__/realEstateDataMock';
import { Pagination } from '../../../constants/Pagination';
import RealEstateList from '../RealEstateList';
import { addTestProviders } from '../../../__tests__/__utils__/renderHelper';
import { useTranslation } from 'react-i18next';

describe('Real Estate List component test', () => {
    const onDispatchActionMock = jest.fn();
    const { t } = useTranslation();

    const pageObject = {
        pageOne: 1,
        pageTwo: 2,
        loaderBlock: t('realEstate.list.subTitle'),
    };

    const paginationTestOpts = {
        selector: 'button',
    };

    describe('Visualization Behaviour', () => {
        it('Should render component without errors', () => {
            const component = addTestProviders(
                <RealEstateList items={basicRealEstateItemsDataMock} page={Pagination.DefaultPage} onDispatchAction={onDispatchActionMock} numberOfPages={2} />
            );

            const { container } = render(component);
            expect(container).toMatchSnapshot();
        });

        it('Should not render loader block if has items', () => {
            const component = addTestProviders(
                <RealEstateList items={basicRealEstateItemsDataMock} page={Pagination.DefaultPage} onDispatchAction={onDispatchActionMock} numberOfPages={2} />
            );

            const { queryByText } = render(component);

            expect(queryByText(pageObject.loaderBlock)).not.toBeInTheDocument();
        });

        it("Should render loader block if hasn't items", () => {
            const component = addTestProviders(<RealEstateList items={[]} page={Pagination.DefaultPage} onDispatchAction={onDispatchActionMock} numberOfPages={2} />);

            const { queryByText } = render(component);

            expect(queryByText(pageObject.loaderBlock)).toBeInTheDocument();
        });

        it('Should render items data if has items list', () => {
            const component = addTestProviders(
                <RealEstateList items={basicRealEstateItemsDataMock} page={Pagination.DefaultPage} onDispatchAction={onDispatchActionMock} numberOfPages={2} />
            );
            const itemsTestOptions = {
                selector: 'p',
                exact: true,
            };

            const itemDataToFind = basicRealEstateItemsDataMock[0];

            const { queryAllByText, queryByText } = render(component);
            const streetElements = queryAllByText(itemDataToFind.street, itemsTestOptions);
            const yearBuiltElements = queryAllByText(itemDataToFind.yearbuilt, itemsTestOptions);
            const salePriceElement = queryByText(itemDataToFind.saleprice, itemsTestOptions);

            expect(streetElements.length).toBeGreaterThan(0);
            expect(yearBuiltElements.length).toBeGreaterThan(0);
            expect(salePriceElement).toBeInTheDocument();
            expect(salePriceElement).toHaveTextContent(`${itemDataToFind.saleprice}`);
        });
    });

    describe('Pagination Behaviour', () => {
        it('Should not display the pagination component if the number of pages is one', () => {
            const component = addTestProviders(
                <RealEstateList items={basicRealEstateItemsDataMock} page={Pagination.DefaultPage} onDispatchAction={onDispatchActionMock} numberOfPages={1} />
            );

            const { queryByLabelText } = render(component);

            expect(queryByLabelText(pageObject.pageOne, paginationTestOpts)).not.toBeInTheDocument();
        });

        it('Should render pagination component if number of pages is greater than one', () => {
            const component = addTestProviders(
                <RealEstateList items={basicRealEstateItemsDataMock} page={Pagination.DefaultPage} onDispatchAction={onDispatchActionMock} numberOfPages={24} />
            );

            const { queryByText } = render(component);

            expect(queryByText(pageObject.pageOne, paginationTestOpts)).toBeInTheDocument();
        });

        it('Should dispatch action with page after click in pagination component page', () => {
            const component = addTestProviders(
                <RealEstateList items={basicRealEstateItemsDataMock} page={Pagination.DefaultPage} onDispatchAction={onDispatchActionMock} numberOfPages={24} />
            );

            const { queryByText } = render(component);

            const pageElement = queryByText(pageObject.pageTwo, paginationTestOpts);

            expect(pageElement).toBeInTheDocument();

            fireEvent.click(pageElement!);

            expect(onDispatchActionMock).toHaveBeenCalledTimes(1);
            expect(onDispatchActionMock).toHaveBeenCalledWith(pageObject.pageTwo);
        });
    });
});
