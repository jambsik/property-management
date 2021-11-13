import React from 'react';
import { BrowserRouter, RouteProps, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import { appRoutes } from './config/routes';
import { appTheme } from './theme/theme';
import { store } from './store';

import './App.css';

const App: React.FC = () => (
    <ThemeProvider theme={appTheme}>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {appRoutes.map((props: RouteProps, index: number) => (
                        <Route key={`${props.path || index}`} {...props} />
                    ))}
                </Routes>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
);

export default App;
