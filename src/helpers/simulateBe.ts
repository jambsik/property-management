import { Pagination } from './../constants/Pagination';
/* START THE BACKEND SIMULATION BLOCK
    The next block will simulate a pagination of the json we are using as a mock. We will also simulate filtering, sorting and other things.
    In a real world they should be features provided by the own service with which we communicate with BE.
*/
export type DataByIdType = {
    id: number;
};

export const applyPagination = <Type>(data: Array<Type>, page: number, limit: number): Array<Type> => data.slice((page - Pagination.offset) * limit, page * limit);

export type FilterParams = {
    [key: string]: any;
};

export const applyFilters = <Type>(filters: FilterParams, data: Array<Type>): Array<Type> => {
    let dataToTransform = data;
    const filterKeys = Object.keys(filters);
    const hasFilters = filterKeys.length > 0;

    if (hasFilters) {
        dataToTransform = data.filter((item: Type): boolean =>
            Object.keys(filters).every((propertyName: string): boolean => (filters[propertyName] ? item[propertyName as keyof Type] === filters[propertyName] : true))
        );
    }

    return dataToTransform;
};

export const getNumberOfPages = (total: number) => Math.floor(total / Pagination.DefaultLimit);

export const findById = <Type extends DataByIdType>(id: number, data: Array<Type>): Type | undefined => data.find((item: Type) => item.id === id);

/* END THE BACKEND SIMULATION BLOCK */
