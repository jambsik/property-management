import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App container test', () => {
    it('Should render component App with out errors', () => {
        const { container } = render(<App />);

        expect(container).toMatchSnapshot();
    });

    it('Should show home page after init routing in App container', () => {
        const { getByText } = render(<App />);

        expect(getByText('home.title')).toBeInTheDocument();
    });
});
