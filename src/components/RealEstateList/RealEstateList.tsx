import { IconButton, Pagination, Paper, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';

import { realEstateListIconStyles, realEstateListImageStyles, realEstateListItemStyles, realEstateListLoaderStyles, realEstateListPaperStyles } from './RealEstateList.styles';
import { Size } from '../../constants/Size';
import { RealEstate } from '../../models/RealEstate';
import RealEstateListItem from './RealEstateListItem';
import { ResponsePagination } from '../../models/Response';

interface RealEstateListProps {
    pagination?: ResponsePagination;
    items: Array<RealEstate>;
    onDispatchAction: (page?: number) => void;
}

const RealEstateList = ({ items, pagination, onDispatchAction }: RealEstateListProps) => {
    const { t } = useTranslation();
    const hasItems = items.length > 0;
    const Image = styled('img')``;

    const hasPagination = pagination && pagination.count > 1;

    const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        onDispatchAction(page);
    };
    const getLoaderBlock = () => (
        <>
            <Typography color="info" variant="h4">
                {t('realEstate.list.title')}
            </Typography>
            <Image alt="build" sx={realEstateListImageStyles} src="images/build.svg" />
            <Typography color="info" variant="h4">
                {t('realEstate.list.subTitle')}
            </Typography>
            <IconButton onClick={() => onDispatchAction()} sx={realEstateListIconStyles} aria-label="searcheable real estate" color="secondary">
                <SearchIcon fontSize={Size.Large} />
            </IconButton>
        </>
    );

    return (
        <Paper sx={realEstateListPaperStyles} elevation={3}>
            {hasItems ? (
                <Box>
                    {items.map((item: RealEstate) => (
                        <Box key={item.id} sx={realEstateListItemStyles}>
                            <RealEstateListItem item={item} />
                        </Box>
                    ))}
                    {hasPagination && <Pagination count={pagination?.count} variant="outlined" shape="rounded" onChange={onChangePage} />}
                </Box>
            ) : (
                <Box sx={realEstateListLoaderStyles}>{getLoaderBlock()}</Box>
            )}
        </Paper>
    );
};
export default RealEstateList;
