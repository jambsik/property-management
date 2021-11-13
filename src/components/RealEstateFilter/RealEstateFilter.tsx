import { Box } from '@mui/system';
import React from 'react';
import FilterBox from '../../features/FilterBox/FilterBox';
import { realEstateFilterRootStyles } from './RealEstateFilter.styles';
interface RealEstateFilterProps {}

const RealEstateFilter = (props: RealEstateFilterProps) => {
    return (
        <Box sx={realEstateFilterRootStyles}>
            <FilterBox>child</FilterBox>
        </Box>
    );
};
export default RealEstateFilter;
