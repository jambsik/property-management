import { AnyAction } from 'redux';

type StoreTestType = {
    getState: Function;
    dispatch: Function;
};

const thunk =
    ({ dispatch, getState }: StoreTestType) =>
    (next: Function) =>
    (action: AnyAction | any) => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }

        return next(action);
    };
export const createTestStore = () => {
    const store: StoreTestType = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn(),
    };
    const next = jest.fn();

    const invoke = (action: Function) => thunk(store)(next)(action);

    return { store, next, invoke };
};
