import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

import { homeGetStartedStyles, homeImageStyles, homeStylesRoot } from './Home.styles';
import { APP_ROUTES_PATH } from '../../config/routes';

const Home = () => {
    const { t } = useTranslation();
    const Image = styled('img')``;

    return (
        <Box sx={homeStylesRoot}>
            <Typography variant="h1" color="primary">
                {t('home.title')}
            </Typography>
            <Image sx={homeImageStyles} alt="manage" src="images/manage.svg" />
            <Typography variant="h1" color="primary">
                {t('home.subTitle')}
            </Typography>
            <Link to={APP_ROUTES_PATH.realEstate}>
                <Button sx={homeGetStartedStyles} variant="contained" size="medium" color="secondary">
                    {t('home.getStarted')}
                </Button>
            </Link>
        </Box>
    );
};

export default Home;
