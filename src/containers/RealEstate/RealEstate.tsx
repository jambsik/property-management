import { Box, styled } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RealEstateFilter from '../../components/RealEstateFilter/RealEstateFilter';
import RealEstateList from '../../components/RealEstateList/RealEstateList';
import { FilterParams } from '../../helpers/simulateBe';
import { RealEstate as RealEstateModel } from '../../models/RealEstate';
import { ResponseFilter, ResponsePagination } from '../../models/Response';
import { getRealEstateDataAction } from '../../store/realEstate/actions/getRealEstateData';
import { getRealStateMetaDataAction } from '../../store/realEstate/actions/getRealEstateMetaData';
import { selectRealEstateFilters, selectRealEstateItems, selectRealEstatePagination } from '../../store/realEstate/realEstateSlice';
import { realEstateContentStyles, realEstateIconStyles, realEstateRootStyles } from './RealEstate.styles';

const RealEstate = () => {
    const Image = styled('img')``;
    const dispatch = useDispatch();
    const filters: Array<ResponseFilter> = useSelector(selectRealEstateFilters);
    const items: Array<RealEstateModel> = useSelector(selectRealEstateItems);
    const pagination: ResponsePagination | undefined = useSelector(selectRealEstatePagination);

    const getDataHandler = (filterValues?: FilterParams) => {
        dispatch(getRealEstateDataAction(filterValues));
    };

    useEffect(() => {
        dispatch(getRealStateMetaDataAction());
    }, [dispatch]);

    return (
        <Box sx={realEstateRootStyles}>
            <Image sx={realEstateIconStyles} alt="web-icon" src="images/wallet.svg" />
            <Box sx={realEstateContentStyles}>
                <RealEstateFilter filters={filters} onSearch={getDataHandler} />
                <RealEstateList pagination={pagination} items={items} onSearch={getDataHandler} />
            </Box>
        </Box>
    );
};

export default RealEstate;
