export const generateI18NextMock = () =>
    jest.mock('react-i18next', () => ({
        useTranslation: () => {
            return {
                t: (key: string) => key,
            };
        },
    }));
