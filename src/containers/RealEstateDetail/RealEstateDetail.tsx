import { Box, styled } from '@mui/system';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';

import { RealEstate } from '../../models/RealEstate';
import { getRealEstateItemDataAction } from '../../store/realEstate/actions/getRealEstateItemData';
import { selectRealEstateItem } from '../../store/realEstate/realEstateSlice';
import {
    realEstateDetailImgStyles,
    realEstateDetailRootStyles,
    realEstateDetailTableStyles,
    realEstateDetailTitleStyles,
    realEstateDetailTryAgainStyles,
    realEstateDetailTryImgStyles,
} from './RealEstateDetail.styles';

const RealEstateDetail = () => {
    const Image = styled('img')``;
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const { id } = useParams();

    const realEstateItem: RealEstate | undefined = useSelector(selectRealEstateItem);

    const itemKeys = realEstateItem && Object.keys(realEstateItem);

    useEffect(() => {
        if (id) {
            dispatch(getRealEstateItemDataAction(id));
        }
    }, [dispatch, id]);

    return (
        <Box sx={realEstateDetailRootStyles}>
            {realEstateItem ? (
                <>
                    <Image sx={realEstateDetailImgStyles} alt="detail-backgroun" src="/images/home.svg" />
                    <TableContainer sx={realEstateDetailTableStyles} component={Paper}>
                        <Table aria-label="simple table">
                            <TableBody>
                                {itemKeys?.map((key: string) => (
                                    <TableRow key={key}>
                                        <TableCell align="center">{key}</TableCell>
                                        <TableCell data-testid={`table-${key}`} component="th" scope="row">
                                            {realEstateItem[key as keyof RealEstate]}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            ) : (
                <Box sx={realEstateDetailTryAgainStyles}>
                    <Image sx={realEstateDetailTryImgStyles} alt="build" src="/images/build.svg" />
                    <Typography sx={realEstateDetailTitleStyles} color="primary" variant="h3" align="center">
                        {t('realEstate.detail.tryAgain')}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};
export default RealEstateDetail;
