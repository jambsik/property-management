import { BreakPoints } from './../constants/BreakPoints';
import { createTheme } from '@mui/material/styles';
import { emerald, intensePurple, lightPurple, white, lightEmerald } from './colors';

export const appTheme = createTheme({
    palette: {
        primary: {
            main: white,
        },
        secondary: {
            main: emerald,
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: 'contained',
                        color: 'primary',
                    },
                    style: {
                        color: white,
                        background: emerald,
                        '&:hover': {
                            background: lightEmerald,
                        },
                    },
                },
                {
                    props: {
                        variant: 'contained',
                        color: 'secondary',
                    },
                    style: {
                        color: white,
                        background: intensePurple,
                        '&:hover': {
                            background: lightPurple,
                        },
                    },
                },
            ],
        },
    },
});

appTheme.typography = {
    ...appTheme.typography,
    h1: {
        ...appTheme.typography.h1,
        [appTheme.breakpoints.up(BreakPoints.Md)]: {
            fontSize: '6rem',
        },
        [appTheme.breakpoints.between(BreakPoints.Sm, BreakPoints.Md)]: {
            fontSize: '4rem',
        },
        [appTheme.breakpoints.down(BreakPoints.Sm)]: {
            fontSize: '2rem',
        },
    },
};
