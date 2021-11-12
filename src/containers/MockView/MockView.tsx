import React, { useEffect, useState } from 'react';
import { MockModel } from '../../models/MockModel';
import { getMockData } from '../../services/mockService';

const MockView = () => {
    const [mockData, setMockData] = useState<MockModel | null>();

    const getData = async () => {
        const data = await getMockData();

        setMockData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return <div>{mockData?.hello}</div>;
};

export default MockView;
