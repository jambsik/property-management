import { ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { appTheme } from '../../theme/theme';

export const addTestProviders = (component: ReactNode) => (
    <ThemeProvider theme={appTheme}>
        <BrowserRouter>{component}</BrowserRouter>
    </ThemeProvider>
);
