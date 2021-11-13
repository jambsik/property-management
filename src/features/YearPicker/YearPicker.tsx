import React, { useState } from 'react';
import Input from '../Input/Input';
import { Autocomplete, TextFieldProps } from '@mui/material';

interface YearPickerProps {
    label: string;
}

const YearPicker = ({ label }: YearPickerProps) => {
    const FIRST_YEAR = new Date('01/01/1900').getFullYear();
    const LAST_YEAR = new Date().getFullYear();
    const generateYears = (firstYear: number, lastYear: number) => {
        const listOfYears = [];

        for (let year = firstYear; year <= lastYear; year++) {
            listOfYears.push({
                label: `${year}`,
            });
        }

        return listOfYears;
    };

    const [options] = useState(() => generateYears(FIRST_YEAR, LAST_YEAR));

    return (
        <Autocomplete disablePortal id="combo-box-demo" options={options} sx={{ width: '120px' }} renderInput={(params: TextFieldProps) => <Input {...params} label={label} />} />
    );
};
export default YearPicker;
