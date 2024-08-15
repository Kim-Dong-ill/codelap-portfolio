import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
    return (
        <div className='projectWrap'>
            <div className='projectContent'>
                <div className='projectTitle title'>Project</div>
                <div className='projectSub subtitle'>"The projects I've worked on so far"</div>
            </div>
            <ul className='projectCardWrap'>
                <li><ProjectCard /></li>
                <li><ProjectCard /></li>
                <li><ProjectCard /></li>
                <li><ProjectCard /></li>
            </ul>
        </div>
    )
}

export default Project