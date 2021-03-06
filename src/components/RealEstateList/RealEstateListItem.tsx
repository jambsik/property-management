import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { RealEstate } from '../../models/RealEstate';
import { realEstateListItemImgStyles, realEstateListItemRootStyles, realEstateListItemTextStyles } from './RealEstateList.styles';
import { getDetailPathRoute } from '../../config/routes';

interface RealEstateListItemProps {
    item: RealEstate;
}

const RealEstateListItem = ({ item }: RealEstateListItemProps) => {
    const { t } = useTranslation();
    const Image = styled('img')``;
    const valuesToShow = ['street', 'yrsold', 'yearbuilt', 'saleprice', 'garagecars', 'kitchenabvgr', 'bedroomabvgr'];

    return (
        <Link to={getDetailPathRoute(item.id)}>
            <Box data-testid={`list-item-${item.id}`} sx={realEstateListItemRootStyles}>
                <Image sx={realEstateListItemImgStyles} alt="home-image" src="/images/home.svg" />
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2 }}>
                    {valuesToShow.map((key: string) => (
                        <React.Fragment key={key}>
                            <Grid item xs={2}>
                                <Typography color="info" variant="body1">
                                    {t(`realEstate.filters.${key}`)}:
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography sx={realEstateListItemTextStyles} color="secondary" variant="body1">
                                    {item[key as keyof RealEstate]}
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>
        </Link>
    );
};

export default RealEstateListItem;

/*

                <Box key={key} sx={realEstateListItemBoxStyles}>
                 
                </Box>
*/
