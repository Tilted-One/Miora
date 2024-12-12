import React from 'react'
import Wine from '../Wines'

export default function Content(props) {
    return (
        <section className='my-20 h-auto'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl max-w-full md:max-w-[852px] leading-snug sm:leading-normal md:leading-relaxed mx-auto'>
                {props.translations.contentTitle}
            </h1>
        </section>
    )
}