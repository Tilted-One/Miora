import React from 'react'
import Wine from '../Wines'

export default function Content(props) {
    return (
        <section className='px-5 pt-32'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl max-w-full md:max-w-[852px] leading-snug sm:leading-normal md:leading-relaxed mx-auto mb-10 sm:mb-20 md:mb-40'>
                {props.translations.contentTitle}
            </h1>
            <Wine
                title='title'
                description='Reprehenderit id labore mollit culpa ullamco aliquip pariatur anim ipsum minim veniam proident ipsum. Ut dolor deserunt ea exercitation qui occaecat aute voluptate sint deserunt eu adipisicing deserunt aliquip.'
                flexDirection='text-left'
                image=''
                buttonDirection='bottom-0 left-10'
            />
            <Wine
                title='title1'
                description='Reprehenderit id labore mollit culpa ullamco aliquip pariatur anim ipsum minim veniam proident ipsum.'
                flexDirection='flex-row-reverse text-right'
                image=''
                buttonDirection='bottom-0 right-10'
            />
            <div></div>
        </section>
    )
}