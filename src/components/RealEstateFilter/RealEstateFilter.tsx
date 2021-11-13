import { Box } from '@mui/system';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { FilterTypes } from '../../constants/FilterTypes';
import FilterBox from '../../features/FilterBox/FilterBox';
import Input, { InputProps } from '../../features/Input/Input';
import YearPicker from '../../features/YearPicker/YearPicker';
import { ResponseFilter } from '../../models/Response';
import { selectRealEstateFilters } from '../../store/realEstate/realEstateSlice';
import { realEstateFilterRootStyles } from './RealEstateFilter.styles';

interface RealEstateFilterProps {}

const RealEstateFilter = (props: RealEstateFilterProps) => {
    const { t } = useTranslation();
    const filters: Array<ResponseFilter> = useSelector(selectRealEstateFilters);

    const getFilterComponent = (type: FilterTypes, componentProps: InputProps): ReactNode => {
        switch (type) {
            case FilterTypes.String:
            case FilterTypes.Number:
                return <Input {...componentProps} type={type} />;
            case FilterTypes.Year:
                return <YearPicker label={componentProps.label} />;
            default:
                return <Input {...componentProps} type={FilterTypes.String} />;
        }
    };

    return (
        <Box sx={realEstateFilterRootStyles}>
            <FilterBox>
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
