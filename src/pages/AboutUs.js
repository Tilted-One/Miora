import React from 'react'

import Header from '../components/Header'
import Hero from '../components/homeComponents/Hero'
import Content from '../components/homeComponents/Content'

export default function Home() {
    return (
        <div className='App mt-16'>
            <div class="h-16 w-full sm:w-[600px] rounded-full mt-8 m-auto flex gap-x-2 sm:gap-x-6 content-center justify-around sm:justify-center">
                <button class="w-full sm:w-3/12 h-full text-black hover:border-b-2 hover:border-bordeHover">Wine</button>
                <button class="w-full sm:w-3/12 h-full text-black hover:border-b-2 hover:border-bordeHover">Chacha</button>
                <button class="w-full sm:w-3/12 h-full text-black hover:border-b-2 hover:border-bordeHover">Liqueur</button>
                <button class="w-full sm:w-3/12 h-full text-black hover:border-b-2 hover:border-bordeHover border-b-2 border-bordeActive">Whiskey</button>
            </div>
        </div>
    )
}