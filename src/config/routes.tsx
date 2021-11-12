import { RouteProps } from 'react-router';
import Home from '../containers/Home/Home';
import MockView from '../containers/MockView/MockView';

export const APP_ROUTES_PATH = {
    base: '/',
    mockView: '/mock-view',
};

export const appRoutes: RouteProps[] = [
    {
        path: APP_ROUTES_PATH.base,
        element: <Home />,
    },
    {
        path: APP_ROUTES_PATH.mockView,
        element: <MockView />,
    },
];
