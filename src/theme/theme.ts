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
