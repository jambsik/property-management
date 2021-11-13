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

    const getFilterComponent = (type: FilterTypes, componentProps: InputProps): ReactNode => {
        switch (type) {
            case FilterTypes.String:
            case FilterTypes.Number:
                return <Input {...componentProps} type={type} />;
            case FilterTypes.Year:
                return (
                    <YearPicker
                        label={componentProps.label}
                        onChange={(event: React.ChangeEvent<{}>, yearPickerValue: YearPickerValue) => {
                            const hasValue = yearPickerValue?.label;
                            if (hasValue) {
                                setFilterValues({
                                    ...filterValues,
                                    [componentProps.name]: parseInt(yearPickerValue?.label),
                                });
                            }
                        }}
                    />
                );
            default:
                return <Input {...componentProps} type={FilterTypes.String} />;
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
                            type,
                        })}
                    </React.Fragment>
                ))}
            </FilterBox>
        </Box>
    );
};
export default RealEstateFilter;
