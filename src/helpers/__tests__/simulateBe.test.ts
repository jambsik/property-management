import { applyPagination, applyFilters } from './../simulateBe';

describe('simulate BE helper test', () => {
    type TestItemType = { id: number; name: string };

    const testItemsDataMock: Array<TestItemType> = [
        { id: 1, name: 'name1' },
        { id: 2, name: 'name2' },
        { id: 3, name: 'name3' },
        { id: 4, name: 'name4' },
    ];

    describe('Apply Pagination', () => {
        it('Should return the same amount of items, if the capacity is less than the page limit', () => {
            const items: Array<TestItemType> = applyPagination<TestItemType>(testItemsDataMock, 1, 20);

            expect(items).toHaveLength(testItemsDataMock.length);
        });

        it('Should return half the number of items if there are twice as many items as the limit', () => {
            const items: Array<TestItemType> = applyPagination<TestItemType>(testItemsDataMock, 1, 2);

            expect(items).toHaveLength(testItemsDataMock.length / 2);
        });
    });

    describe('Apply filters', () => {
        it('Should return the items that meet the filters you have set', () => {
            const items: Array<TestItemType> = applyFilters<TestItemType>(
                {
                    name: 'name2',
                },
                testItemsDataMock
            );

            expect(items).toHaveLength(1);
            expect(items[0]).toEqual(testItemsDataMock[1]);
        });

        it('Should not return items if all filters do not match', () => {
            const items: Array<TestItemType> = applyFilters<TestItemType>(
                {
                    id: '1',
                    name: 'name2',
                },
                testItemsDataMock
            );
            expect(items).toHaveLength(0);
        });

        it('Should return the same data received if no filters are applied', () => {
            const items: Array<TestItemType> = applyFilters<TestItemType>({}, testItemsDataMock);
            expect(items).toHaveLength(testItemsDataMock.length);
        });
    });
});
