import { getAppRoutes, APP_ROUTES_PATH } from '../routes';
describe('Routes config test', () => {
    it('Should check route paths integrity', () => {
        expect(APP_ROUTES_PATH).toMatchInlineSnapshot(`
            Object {
              "base": "/",
              "realEstate": "/real-estate",
              "realEstateDetail": "/real-estate/:id",
            }
        `);
    });

    it('Should check application routes integrity', () => {
        expect(getAppRoutes()).toMatchInlineSnapshot(`
            Array [
              Object {
                "element": <Home />,
                "path": "/",
              },
              Object {
                "element": <RealEstate />,
                "path": "/real-estate",
              },
              Object {
                "element": <RealEstateDetail />,
                "path": "/real-estate/:id",
              },
            ]
        `);
    });
});
