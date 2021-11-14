import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import YearPicker from '../YearPicker';
describe('YearPicker component test', () => {
    type ElementFinder = (selector: string) => Element | null;

    const yearPickerLabel = 'My year picker';
    const onChangeMock = jest.fn();
    const someYearsFromNow = ['2021', '1990', '1901'];
    const inputTestOptions = {
        selector: 'li',
    };

    const pageObject = {
        input: `input[id="year-picker-${yearPickerLabel}"]`,
    };

    const typeYear = async (dispatchElementFinder: ElementFinder, element: Element, year: string, inTheDocument: boolean = true): Promise<Element | undefined> => {
        fireEvent.change(element, {
            target: {
                value: year,
            },
        });
        let option;

        await waitFor(() => {
            option = dispatchElementFinder(year);
            inTheDocument ? expect(option).toBeInTheDocument() : expect(option).not.toBeInTheDocument();
        });

        return option;
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Should render component without errors', () => {
        const { container } = render(<YearPicker label={yearPickerLabel} onChange={onChangeMock} />);

        expect(container).toMatchSnapshot();
    });

    it('Should be able to select this or previous years', async () => {
        const { container, queryByText } = render(<YearPicker label={yearPickerLabel} onChange={onChangeMock} />);

        const inputElement = container.querySelector(pageObject.input);

        expect(inputElement).toBeInTheDocument();

        const opt1: Element | undefined = await typeYear((selector: string) => queryByText(selector, inputTestOptions), inputElement!, someYearsFromNow[0]);

        opt1 && fireEvent.click(opt1);
        expect(onChangeMock).toHaveBeenCalledTimes(1);

        const opt2: Element | undefined = await typeYear((selector: string) => queryByText(selector, inputTestOptions), inputElement!, someYearsFromNow[1]);

        opt2 && fireEvent.click(opt2);
        expect(onChangeMock).toHaveBeenCalledTimes(2);

        const opt3: Element | undefined = await typeYear((selector: string) => queryByText(selector, inputTestOptions), inputElement!, someYearsFromNow[2]);

        opt3 && fireEvent.click(opt3);
        expect(onChangeMock).toHaveBeenCalledTimes(3);
    });

    it('Should not show any option if the year is lower than 1900 or higher than the current year', async () => {
        const nextYear = `{new Date().getFullYear() + 1}`;

        const { container, queryByText } = render(<YearPicker label={yearPickerLabel} onChange={onChangeMock} />);

        const inputElement = container.querySelector(pageObject.input);

        expect(inputElement).toBeInTheDocument();

        const opt1: Element | undefined = await typeYear((selector: string) => queryByText(selector, inputTestOptions), inputElement!, '1800', false);

        opt1 && fireEvent.click(opt1);
        expect(onChangeMock).toHaveBeenCalledTimes(0);

        const opt2: Element | undefined = await typeYear((selector: string) => queryByText(selector, inputTestOptions), inputElement!, nextYear, false);

        opt2 && fireEvent.click(opt2);
        expect(onChangeMock).toHaveBeenCalledTimes(0);
    });

    it('Should dispatch on change after select an option', async () => {
        const { container, queryByText } = render(<YearPicker label={yearPickerLabel} onChange={onChangeMock} />);

        const inputElement = container.querySelector(pageObject.input);

        expect(inputElement).toBeInTheDocument();

        const option: Element | undefined = await typeYear((selector: string) => queryByText(selector, inputTestOptions), inputElement!, someYearsFromNow[0]);

        option && fireEvent.click(option);
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
});
