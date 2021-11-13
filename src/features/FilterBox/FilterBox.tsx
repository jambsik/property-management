import { Box } from '@mui/system';
import React, { ReactNode } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { filterBoxChildStyles, filterBoxRootStyles } from './FilterBox.styles';
import { IconButton } from '@mui/material';
import { Size } from '../../constants/Size';

export type FilterBoxSearch = () => void;
interface FilterBoxProps {
    children: ReactNode;
    onSearch: () => void;
}

const FilterBox = ({ children, onSearch }: FilterBoxProps) => {
    return (
        <Box sx={filterBoxRootStyles}>
            <Box sx={filterBoxChildStyles}>
                {children}
                <IconButton aria-label="searcheable real estate" color="secondary" onClick={onSearch}>
                    <SearchIcon fontSize={Size.Large} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default FilterBox;
