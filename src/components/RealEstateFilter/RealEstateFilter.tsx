import { Box } from '@mui/system';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { FilterTypes } from '../../constants/FilterTypes';
import FilterBox from '../../features/FilterBox/FilterBox';
import Input, { InputProps } from '../../features/Input/Input';
import YearPicker, { YearPickerValue } from '../../features/YearPicker/YearPicker';
import { ResponseFilter } from '../../models/Response';
import { realEstateFilterRootStyles } from './RealEstateFilter.styles';

interface RealEstateFilterProps {
    filters: Array<ResponseFilter>;
    onSearch: () => void;
    addFilter: (name: string, filterValue?: string | number) => void;
}

const RealEstateFilter = ({ filters, addFilter, onSearch }: RealEstateFilterProps) => {
    const { t } = useTranslation();

    const onInputChange = (name: string, inputValue: string | number) => {
        addFilter(name, inputValue);
    };

    const getFilterComponent = (type: FilterTypes, componentProps: Pick<InputProps, 'name' | 'label'>): ReactNode => {
        switch (type) {
            case FilterTypes.Number:
                return (
                    <Input
                        {...componentProps}
                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => onInputChange(componentProps.name, parseInt(event.target.value))}
                        type={type}
                    />
                );
            case FilterTypes.Year:
                return (
                    <YearPicker
                        label={componentProps.label}
                        onChange={(event: React.ChangeEvent<{}>, yearPickerValue: YearPickerValue) => {
                            const yearValue = yearPickerValue?.label ? parseInt(yearPickerValue?.label) : undefined;
                            addFilter(componentProps.name, yearValue);
                        }}
                    />
                );
            default:
                return (
                    <Input
                        {...componentProps}
                        onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => onInputChange(componentProps.name, event.target.value)}
                        type={FilterTypes.String}
                    />
                );
        }
    };

    return (
        <Box sx={realEstateFilterRootStyles}>
            <FilterBox onSearch={onSearch}>
                {filters.map(({ name, type }: ResponseFilter) => (
                    <React.Fragment key={name}>
                        {getFilterComponent(type, {
                            name,
                            label: t(`realEstate.filters.${name}`),
                        })}
                    </React.Fragment>
                ))}
            </FilterBox>
        </Box>
    );
};
export default RealEstateFilter;
