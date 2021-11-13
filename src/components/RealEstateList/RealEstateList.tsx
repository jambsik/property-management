import { Paper } from '@mui/material';
import React from 'react';
import { realEstateListPaperStyles } from './RealEstateList.styles';

interface RealEstateListProps {}

const RealEstateList = (props: RealEstateListProps) => {
    return <Paper sx={realEstateListPaperStyles} elevation={3}></Paper>;
};
export default RealEstateList;
