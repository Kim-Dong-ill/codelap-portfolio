import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Myself from '../layout/Myself'

function Home() {
    return (
        <div className='website'>
            <Header />
            <Myself />
            <Footer />
        </div>
    )
}

export default Home