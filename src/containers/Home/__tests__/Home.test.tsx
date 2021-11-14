import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';
import { addTestProviders } from '../../../__tests__/__utils__/renderHelper';
describe('Home container test', () => {
    it('Should render component without errors', () => {
        const { container } = render(addTestProviders(<Home />));
        expect(container).toMatchSnapshot();
    });
});
