import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Myself from '../layout/Myself'
import TechSAtack from '../layout/TechSAtack'
import Project from '../layout/Project'

function Home({ handleMode }) {

    const handleSetMode = (newMode) => {
        handleMode(newMode)
    };
    return (
        <div className='website'>
            <Header handleSetMode={handleSetMode} />
            <Myself />
            <TechSAtack />
            <Project />
            <Footer />
        </div>
    )
}

export default Home