import { Box } from '@mui/system';
import React, { ReactNode } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { filterBoxChildStyles, filterBoxRootStyles } from './FilterBox.styles';
import { IconButton } from '@mui/material';
import { Size } from '../../constants/Size';

interface FilterBoxProps {
    children: ReactNode;
}

const FilterBox = ({ children }: FilterBoxProps) => {
    return (
        <Box sx={filterBoxRootStyles}>
            <Box sx={filterBoxChildStyles}>
                {children}
                <IconButton aria-label="searcheable real estate" color="secondary">
                    <SearchIcon fontSize={Size.Large} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default FilterBox;
