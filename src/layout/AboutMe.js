import React from 'react'
import AboutMeCard from './AboutMeCard'
import '../css/aboutMe.scss'

function AboutMe() {
    return (
        <div className='aboutMe'>
            <div className='aboutMeInner'>
                <div className='aboutMeTitle aboutisTitle'>About Me</div>
                <div className='aboutMeContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sapiente ut fugit beatae quo deserunt est porro alias maxime eaque.</div>
            </div>
            <div className='aboutMeEd'>
                <div className='edTitle aboutisTitle'>Education</div>
                <div className='edContent'>
                    <AboutMeCard />
                    <AboutMeCard />
                </div>
            </div>
            <div className='aboutMeDe'>
                <div className='deTitle aboutisTitle'>Development<br /> Education Experience</div>
                <div className='deContent'></div>
            </div>
        </div>
    )
}

export default AboutMe