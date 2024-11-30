import React from 'react'

import Hero from '../components/homeComponents/Hero'
import Content from '../components/homeComponents/Content'
import Partnership from '../components/homeComponents/Partnership'

export default function Home(props) {
  
    return (
        <div className='App'>
            <Hero translations={props.translations} />
            <Content translations={props.translations} />
            <Partnership translations={props.translations} isMobile={props.isMobile} />
        </div>
    )
}