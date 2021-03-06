import { Theme } from '@mui/system';

export const realEstateListPaperStyles = {
    width: '1200px',
    height: '900px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
};
export const realEstateListLoaderStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
};

export const realEstateListDelimiterStyles = (theme: Theme) => ({
    width: '100%',
    borderBottom: `2px solid ${theme.palette.info.main}`,
});

export const realEstateListImageStyles = {
    width: '800px',
    height: '600px',
};

export const realEstateListIconStyles = {
    marginTop: '24px',
};

export const realEstateListItemStyles = {
    marginBottom: '24px',
};

export const realEstateListItemRootStyles = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
};

export const realEstateListItemTextStyles = {
    marginLeft: '16px',
};

export const realEstateListItemImgStyles = {
    width: '180px',
    height: '180px',
};
