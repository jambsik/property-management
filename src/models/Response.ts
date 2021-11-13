import { FilterTypes } from './../constants/FilterTypes';
export interface ResponseFilter {
    name: string;
    type: FilterTypes;
}

export interface ResponsePagination {
    count: number;
}
export interface ResponseMetaData {
    filters: Array<ResponseFilter>;
    pagination?: ResponsePagination;
}

export interface Response<Data> {
    metaData?: ResponseMetaData;
    data: Array<Data> | Data;
}
