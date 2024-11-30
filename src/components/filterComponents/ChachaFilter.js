import React from 'react';
import ProductFilter from './ProductFilter';

export default function ChachaFilter() {
    const brands = {
        buttonName: 'Brand',
        names: [
            { labelName: 'Miora', id: 'miora' },
            { labelName: 'Gewelli', id: 'gewelli' },
        ]
    };
    const category = {};
    const type = {};

    const isEmpty = (obj) => Object.keys(obj).length === 0;

    return (
        <div className='w-full'>
            {!isEmpty(brands) && <ProductFilter filter={brands} />}
            {!isEmpty(category) && <ProductFilter filter={category} />}
            {!isEmpty(type) && <ProductFilter filter={type} />}
        </div>
    );
}
