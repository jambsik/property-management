import { FilterTypes } from '../../constants/FilterTypes';
import { ResponseFilter } from '../../models/Response';

export const basicFiltersDataMock: Array<ResponseFilter> = [
    {
        name: 'street',
        type: FilterTypes.String,
    },
    {
        name: 'yearbuilt',
        type: FilterTypes.Year,
    },
    {
        name: 'yrsold',
        type: FilterTypes.Year,
    },
    {
        name: 'saleprice',
        type: FilterTypes.Number,
    },
];
