import { RouteProps } from 'react-router';
import Home from '../containers/Home/Home';
import RealEstate from '../containers/RealEstate/RealEstate';
import RealEstateDetail from '../containers/RealEstateDetail/RealEstateDetail';

export const APP_ROUTES_PATH = {
    base: '/',
    realEstate: '/real-estate',
    realEstateDetail: '/real-estate/:id',
};

export const getAppRoutes = (): RouteProps[] => [
    {
        path: APP_ROUTES_PATH.base,
        element: <Home />,
    },
    {
        path: APP_ROUTES_PATH.realEstate,
        element: <RealEstate />,
    },
    {
        path: APP_ROUTES_PATH.realEstateDetail,
        element: <RealEstateDetail />,
    },
];

export const getDetailPathRoute = (id: string | number) => APP_ROUTES_PATH.realEstateDetail.replace(':id', `${id}`);
