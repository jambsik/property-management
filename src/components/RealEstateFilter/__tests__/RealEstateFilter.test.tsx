import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import RealEstateFilter from '../RealEstateFilter';
import { basicFiltersDataMock } from '../../../__tests__/__fixtures__/filtersDataMock';
import { useTranslation } from 'react-i18next';

describe('RealEstate Filter component test', () => {
    const onSearchMock = jest.fn();
    const addFilterMock = jest.fn();
    const { t } = useTranslation();

    const generateInputSelector = (id: string) => `input[id="${id}"]`;

    const pageObject = {
        searcheableButton: 'filter-box-button',
        street: t('realEstate.filters.street'),
        yearSold: t('realEstate.filters.yrsold'),
        salePrice: t('realEstate.filters.saleprice'),
        yearBuilt: t('realEstate.filters.yearbuilt'),
    };

    it('Should render component without errors', () => {
        const { container } = render(<RealEstateFilter filters={basicFiltersDataMock} onSearch={onSearchMock} addFilter={addFilterMock} />);

        expect(onSearchMock).toHaveBeenCalledTimes(0);
        expect(addFilterMock).toHaveBeenCalledTimes(0);

        expect(container).toMatchSnapshot();
    });

    it('Should render filters with properly component', () => {
        const { container } = render(<RealEstateFilter filters={basicFiltersDataMock} onSearch={onSearchMock} addFilter={addFilterMock} />);

        const streetInput = container.querySelector(generateInputSelector('street'));
        const yeearBuiltElement = container.querySelector(generateInputSelector(`year-picker-${pageObject.yearBuilt}`));

        expect(streetInput).toBeDefined();
        expect(yeearBuiltElement).toBeDefined();

        expect(streetInput).toHaveAttribute('type', 'string');
        expect(yeearBuiltElement).toHaveAttribute('type', 'text');
    });

    it('Should dispatch addFilter when value change', async () => {
        const { container, getByText } = render(<RealEstateFilter filters={basicFiltersDataMock} onSearch={onSearchMock} addFilter={addFilterMock} />);

        const streetInput = container.querySelector(generateInputSelector('street'));
        const yeearBuiltElement = container.querySelector(generateInputSelector(`year-picker-${pageObject.yearBuilt}`));

        expect(streetInput).toBeInTheDocument();

        fireEvent.change(streetInput!, {
            target: {
                value: 200,
            },
        });

        expect(addFilterMock).toHaveBeenCalledTimes(1);
        expect(addFilterMock).toHaveBeenCalledWith('street', '200');

        jest.clearAllMocks();

        expect(yeearBuiltElement).toBeInTheDocument();

        fireEvent.change(yeearBuiltElement!, {
            target: {
                value: 1991,
            },
        });

        await waitFor(() => {
            const option = getByText(1991);

            expect(option).toBeInTheDocument();

            fireEvent.click(option);
        });

        expect(addFilterMock).toHaveBeenCalledTimes(1);
        expect(addFilterMock).toHaveBeenCalledWith('yearbuilt', 1991);
    });
});
