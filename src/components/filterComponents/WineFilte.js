import React from 'react'
import ProductFilter from './ProductFilter'


export default function WineFilter(props) {
    const brands = {
        buttonName: 'მწარმოებელი',
        names: [
            { labelName: 'მიორა', id: 'miora' },
            { labelName: 'ჯეველი', id: 'gewelli' },
            { labelName: 'ლიონიძის ჯვარი', id: 'lionidzis_Jvari' },
        ]
    };
    const category = {
        buttonName: 'კატეგორია',
        names: [
            { labelName: 'შავი', id: 'black' },
            { labelName: 'თეთრი', id: 'white' },
            { labelName: 'როზე', id: 'rose' },
        ]
    };
    const type = {
        buttonName: 'ტიპი',
        names: [
            { labelName: 'მშრალი', id: 'dry' },
            { labelName: 'ნახევრად მშრალი', id: 'semi dry' },
            { labelName: 'ნახევრად ტკბილი', id: 'semi sweet' },
            { labelName: 'ტკბილი', id: 'sweet' },
        ]
    };
    const isEmpty = (obj) => Object.keys(obj).length === 0;

    return (
        <div className='w-full'>
            <h1>Filter</h1>
            {!isEmpty(brands) && <ProductFilter filter={brands} />}
            {!isEmpty(category) && <ProductFilter filter={category} />}
            {!isEmpty(type) && <ProductFilter filter={type} />}
        </div>
    )
}