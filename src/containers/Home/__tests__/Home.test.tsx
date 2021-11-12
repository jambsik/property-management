import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';
import { BrowserRouter } from 'react-router-dom';
describe('Home container test', () => {
    it('Should render component without errors', () => {
        const { container } = render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
