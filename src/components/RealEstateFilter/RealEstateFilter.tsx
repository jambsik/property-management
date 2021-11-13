import { Box } from '@mui/system';
import React from 'react';
import FilterBox from '../../features/FilterBox/FilterBox';
import Input from '../../features/Input/Input';
import { realEstateFilterRootStyles } from './RealEstateFilter.styles';
interface RealEstateFilterProps {}

const RealEstateFilter = (props: RealEstateFilterProps) => {
    return (
        <Box sx={realEstateFilterRootStyles}>
            <FilterBox>
                <Input key={'street'} label={'label'} />
            </FilterBox>
        </Box>
    );
};
export default RealEstateFilter;
