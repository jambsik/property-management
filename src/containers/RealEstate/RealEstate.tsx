import { Box, styled } from '@mui/system';
import React from 'react';
import RealEstateFilter from '../../components/RealEstateFilter/RealEstateFilter';
import RealEstateList from '../../components/RealEstateList/RealEstateList';
import { realEstateContentStyles, realEstateIconStyles, realEstateRootStyles } from './RealEstate.styles';

const RealEstate = () => {
    const Image = styled('img')``;

    return (
        <Box sx={realEstateRootStyles}>
            <Image sx={realEstateIconStyles} alt="web-icon" src="images/wallet.svg" />
            <Box sx={realEstateContentStyles}>
                <RealEstateFilter />
                <RealEstateList />
            </Box>
        </Box>
    );
};

export default RealEstate;
