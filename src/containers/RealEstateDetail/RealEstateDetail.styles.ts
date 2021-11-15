import { BreakPoints } from './../../constants/BreakPoints';
import { Theme } from '@mui/system';
import { emerald } from './../../theme/colors';

export const realEstateDetailRootStyles = {
    width: '100%',
    height: 'calc(100vh + 300px)',
    backgroundColor: emerald,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '16px',
};

export const realEstateDetailImgStyles = (theme: Theme) => ({
    display: 'flex',
    alignSelf: 'center',
    [theme.breakpoints.up(BreakPoints.Xl)]: {
        width: '600px',
    },
    [theme.breakpoints.between(BreakPoints.Lg, BreakPoints.Xl)]: {
        width: '400px',
    },
    [theme.breakpoints.between(BreakPoints.Md, BreakPoints.Lg)]: {
        width: '300px',
    },
    [theme.breakpoints.between(BreakPoints.Sm, BreakPoints.Md)]: {
        width: '200px',
    },
    [theme.breakpoints.down(BreakPoints.Sm)]: {
        width: '100px',
    },
});

export const realEstateDetailTableStyles = {
    width: '1200px',
    height: '800px',
};

export const realEstateDetailTryAgainStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
};

export const realEstateDetailTitleStyles = {
    marginTop: '48px',
};

export const realEstateDetailTryImgStyles = (theme: Theme) => ({
    display: 'flex',
    alignSelf: 'center',
    [theme.breakpoints.up(BreakPoints.Xl)]: {
        width: '1200px',
    },
    [theme.breakpoints.between(BreakPoints.Lg, BreakPoints.Xl)]: {
        width: '900px',
    },
    [theme.breakpoints.between(BreakPoints.Md, BreakPoints.Lg)]: {
        width: '700px',
    },
    [theme.breakpoints.between(BreakPoints.Sm, BreakPoints.Md)]: {
        width: '600px',
    },
    [theme.breakpoints.down(BreakPoints.Sm)]: {
        width: '300px',
    },
});
