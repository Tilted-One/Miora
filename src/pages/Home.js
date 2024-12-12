import React from 'react'

import Hero from '../components/homeComponents/Hero'
import Content from '../components/homeComponents/Content'
import Partnership from '../components/homeComponents/Partnership'
import ContactUs from '../components/homeComponents/ContactUs'
import HistorySection from '../components/homeComponents/HistorySection'
import SalesSection from '../components/homeComponents/SalesSection'

export default function Home(props) {

    return (
        <div className='App'>
            <Hero translations={props.translations} />
            <SalesSection />
            <SalesSection />
            <Content translations={props.translations} />
            <HistorySection />
            <Partnership translations={props.translations} isMobile={props.isMobile} />
            <ContactUs />
        </div>
    )
}