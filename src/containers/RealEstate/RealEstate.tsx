import { Box, styled } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RealEstateFilter from '../../components/RealEstateFilter/RealEstateFilter';
import RealEstateList from '../../components/RealEstateList/RealEstateList';
import { getRealStateMetaDataAction } from '../../store/realEstate/actions/getRealEstateMetaData';
import { realEstateContentStyles, realEstateIconStyles, realEstateRootStyles } from './RealEstate.styles';

const RealEstate = () => {
    const Image = styled('img')``;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRealStateMetaDataAction());
    }, [dispatch]);

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
