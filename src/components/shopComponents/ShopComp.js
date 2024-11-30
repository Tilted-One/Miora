import React from 'react'

import Card from './Card'

import Bottle from '../../images/bottle1.png'
import BottleWhite from '../../images/BottleWhite.png'
import Type from './Type'
import WineFilter from '../filterComponents/WineFilte'
import ChachaFilter from '../filterComponents/ChachaFilter'
import LiqueurFilter from '../filterComponents/LiqueurFilter'
import WhiskeyFilter from '../filterComponents/WhiskeyFilter'
import { useRecoilValue } from 'recoil'
import { categoriesDataState, productsDataState } from '../../state/dataState'

function containsAllElements(arr, target) {
    return target.every(element => arr.includes(element));
}

export default function Shop(props) {
    const categories = useRecoilValue(categoriesDataState)
    const [activeFilter, setActiveFilter] = React.useState(categories[0]);
    const allProducts = useRecoilValue(productsDataState)

    const specValueIdsToBeFiltered = [activeFilter.id]

    return (
        <div className='w-full pb-10'>
            <Type activeFilter={activeFilter} setActiveFilter={setActiveFilter} translations={props.translations} isMobile={props.isMobile} />
            <div className={`flex w-full ${props.isMobile ? 'flex-col' : ''}`}>
                <div className={`flex  pl-6 pt-10 pr-4 ${props.isMobile ? 'flex-col w-full' : 'w-1/5'}`}>
                    {/* <ActiveFilterComponent translations={props.translations} /> */}
                </div>
                <div className={`flex flex-wrap py-10 ml-auto ${props.isMobile ? 'w-full justify-center' : 'w-4/5'}`}>
                    {allProducts.filter(p=> containsAllElements(p.specValueIds, specValueIdsToBeFiltered)).map((product) => (
                        <Card
                            key={product.id}
                            translations={props.translations}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}