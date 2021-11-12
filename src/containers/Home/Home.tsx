import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { homeGetStartedStyles, homeStylesRoot } from './Home.styles';
import { APP_ROUTES_PATH } from '../../config/routes';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Box sx={homeStylesRoot}>
            <Typography variant="h1" color="primary">
                {t('home.title')}
            </Typography>
            <Link to={APP_ROUTES_PATH.mockView}>
                <Button sx={homeGetStartedStyles} variant="contained" size="medium" color="secondary">
                    {t('home.get_started')}
                </Button>
            </Link>
        </Box>
    );
};

export default Home;
