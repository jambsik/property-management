import { Box, styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
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
    const [filterValues, setFilterValues] = useState<FilterParams>({});

    const getDataHandler = ({ filterValues, page }: { filterValues?: FilterParams; page?: number }) => {
        dispatch(
            getRealEstateDataAction({
                filterValues,
                page,
            })
        );
    };

    const addFilter = (name: string, filterValue?: string | number) => {
        setFilterValues({
            ...filterValues,
            [name]: filterValue,
        });
    };

    useEffect(() => {
        dispatch(getRealStateMetaDataAction());
    }, [dispatch]);

    return (
        <Box sx={realEstateRootStyles}>
            <Image sx={realEstateIconStyles} alt="web-icon" src="images/wallet.svg" />
            <Box sx={realEstateContentStyles}>
                <RealEstateFilter
                    addFilter={addFilter}
                    filters={filters}
                    onSearch={() =>
                        getDataHandler({
                            filterValues,
                        })
                    }
                />
                <RealEstateList
                    pagination={pagination}
                    items={items}
                    onDispatchAction={(page?: number) =>
                        getDataHandler({
                            filterValues,
                            page,
                        })
                    }
                />
            </Box>
        </Box>
    );
};

export default RealEstate;
