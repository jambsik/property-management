import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '../Home';
import { addTestProviders } from '../../../__tests__/__utils__/renderHelper';
import { useTranslation } from 'react-i18next';
describe('Home container test', () => {
    const { t } = useTranslation();

    const pageObject = {
        getStartedButton: t('home.getStarted'),
    };
    it('Should render component without errors', () => {
        const { container } = render(addTestProviders(<Home />));
        expect(container).toMatchSnapshot();
    });

    it('Should redirect to real page after click in get started button', () => {
        expect(window.location.href).toEqual('http://localhost/');

        const { getByText } = render(addTestProviders(<Home />));
        const getStartedButton = getByText(pageObject.getStartedButton);

        expect(getStartedButton).toBeInTheDocument();

        fireEvent.click(getStartedButton);

        expect(window.location.href).toEqual('http://localhost/real-estate');
    });
});
