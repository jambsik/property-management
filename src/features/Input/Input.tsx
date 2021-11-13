import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { inputRootStyles } from './Input.styles';

export interface InputProps {
    name: string;
    label: string;
    type: string;
}

const Input = ({ name, label, type, ...props }: InputProps | TextFieldProps) => {
    return <TextField sx={inputRootStyles} id={name} label={label} type={type} variant="standard" color="info" {...props} />;
};

export default Input;
