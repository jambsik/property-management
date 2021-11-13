export interface ResponseFilter {
    name: string;
}

export interface ResponseMetaData {
    filters: Array<ResponseFilter>;
}

export interface Response<Data> {
    metaData: ResponseMetaData;
    data: Array<Data> | Data;
}
