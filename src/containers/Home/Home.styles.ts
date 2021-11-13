import { BreakPoints } from './../../constants/BreakPoints';
import { Theme } from '@mui/system';
import { emerald } from './../../theme/colors';

export const homeStylesRoot = {
    width: '100%',
    height: '100%',
    backgroundColor: emerald,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
};

export const homeGetStartedStyles = {
    marginTop: '24px',
};

export const homeImageStyles = (theme: Theme) => ({
    [theme.breakpoints.up(BreakPoints.Xl)]: {
        width: '800px',
        height: '800px',
    },
    [theme.breakpoints.between(BreakPoints.Md, BreakPoints.Lg)]: {
        width: '600px',
        height: '600px',
    },
    [theme.breakpoints.between(BreakPoints.Sm, BreakPoints.Md)]: {
        width: '400px',
        height: '400px',
    },
    [theme.breakpoints.down(BreakPoints.Sm)]: {
        width: '200px',
        height: '200px',
    },
});
