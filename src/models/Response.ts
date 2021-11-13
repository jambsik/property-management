import { FilterTypes } from './../constants/FilterTypes';
export interface ResponseFilter {
    name: string;
    type: FilterTypes;
}

export interface ResponseMetaData {
    filters: Array<ResponseFilter>;
}

export interface Response<Data> {
    metaData?: ResponseMetaData;
    data: Array<Data> | Data;
}
