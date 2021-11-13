import { RouteProps } from 'react-router';
import Home from '../containers/Home/Home';
import RealEstate from '../containers/RealEstate/RealEstate';

export const APP_ROUTES_PATH = {
    base: '/',
    realEstate: '/real-estate',
};

export const appRoutes: RouteProps[] = [
    {
        path: APP_ROUTES_PATH.base,
        element: <Home />,
    },
    {
        path: APP_ROUTES_PATH.realEstate,
        element: <RealEstate />,
    },
];
