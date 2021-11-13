import { TextField } from '@mui/material';
import React from 'react';
import { inputRootStyles } from './Input.styles';

interface InputProps {
    key: string;
    label: string;
}

const Input = ({ key, label }: InputProps) => {
    return <TextField sx={inputRootStyles} id={key} label={label} variant="standard" color="info" />;
};

export default Input;
