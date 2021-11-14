import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../Input';
describe('Imput component test', () => {
    const inputProps = {
        label: 'My Input Test',
        name: 'input-test',
        type: 'number',
    };

    const pageObject = {
        input: 'input[id="input-test"]',
    };

    it('Should render component without errors', () => {
        const { container } = render(<Input {...inputProps} />);
        expect(container).toMatchSnapshot();
    });

    it('Should render label text', () => {
        const { container } = render(<Input {...inputProps} />);

        expect(container).toHaveTextContent(inputProps.label);
    });

    it('Should update input value', () => {
        const { container } = render(<Input {...inputProps} />);
        const inputElement = container.querySelector(pageObject.input);

        expect(inputElement).toBeInTheDocument();

        fireEvent.change(inputElement!, {
            target: {
                value: 24,
            },
        });

        expect(inputElement).toHaveValue(24);
    });

    it('Should validate if the type is numeric it should not be affected by the change', () => {
        const { container } = render(<Input {...inputProps} />);
        const inputElement = container.querySelector(pageObject.input);

        expect(inputElement).toBeInTheDocument();

        fireEvent.change(inputElement!, {
            target: {
                value: 'test',
            },
        });

        expect(inputElement).toHaveValue(null);
    });
});
