import { Box } from '@mui/system';
import React, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FilterTypes } from '../../constants/FilterTypes';
import FilterBox from '../../features/FilterBox/FilterBox';
import Input, { InputProps } from '../../features/Input/Input';
import YearPicker, { YearPickerValue } from '../../features/YearPicker/YearPicker';
import { FilterParams } from '../../helpers/simulateBe';
import { ResponseFilter } from '../../models/Response';
import { realEstateFilterRootStyles } from './RealEstateFilter.styles';

interface RealEstateFilterProps {
    filters: Array<ResponseFilter>;
    onSearch: (filters: FilterParams) => void;
}

const RealEstateFilter = ({ filters, onSearch }: RealEstateFilterProps) => {
    const { t } = useTranslation();
    const [filterValues, setFilterValues] = useState<FilterParams>({});

    const addFilterValue = (name: string, filterValue?: string | number) => {
        setFilterValues({
            ...filterValues,
            [name]: filterValue,
        });
    };

    const onInputChange = (name: string, inputValue: string | number) => {
        addFilterValue(name, inputValue);
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
                            addFilterValue(componentProps.name, yearValue);
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

    const onSearchHandler = () => {
        onSearch(filterValues);
    };

    return (
        <Box sx={realEstateFilterRootStyles}>
            <FilterBox onSearch={onSearchHandler}>
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
