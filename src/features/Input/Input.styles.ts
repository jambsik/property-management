import { Theme } from '@mui/system';

export const inputRootStyles = (theme: Theme) => ({
    input: {
        '&:hover': {
            color: theme.palette.info.main,
        },
    },
});
