import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterBox from '../FilterBox';
describe('Filter Box component test', () => {
    const onSearchMock = jest.fn();
    const childComponent = <div>My child</div>;

    const pageObject = {
        iconButton: 'filter-box-button',
    };

    it('Should render component without errors', () => {
        const { container } = render(<FilterBox onSearch={onSearchMock}>{childComponent}</FilterBox>);
        expect(container).toMatchSnapshot();
    });

    it('Should dispatch action after click on icon button', () => {
        const { getByTestId } = render(<FilterBox onSearch={onSearchMock}>{childComponent}</FilterBox>);

        fireEvent.click(getByTestId(pageObject.iconButton));

        expect(onSearchMock).toHaveBeenCalledTimes(1);
    });

    it('Should validate child renderization', () => {
        const { container } = render(<FilterBox onSearch={onSearchMock}>{childComponent}</FilterBox>);

        expect(container).toHaveTextContent('My child');
    });
});
