import React from 'react';
import { BrowserRouter, RouteProps, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { appRoutes } from './config/routes';
import { appTheme } from './theme/theme';
import './App.css';

const App: React.FC = () => (
    <ThemeProvider theme={appTheme}>
        <BrowserRouter>
            <Routes>
                {appRoutes.map((props: RouteProps, index: number) => (
                    <Route key={`${props.path || index}`} {...props} />
                ))}
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;
