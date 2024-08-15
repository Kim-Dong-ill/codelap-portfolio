import React from 'react'
import '../css/card.scss'

function ProjectCard() {
    return (
        <div className='cardWrap'>
            <div className='cardImage'><img src="" alt="" /></div>
            <div className='cardContent'>
                <div className='cardTitle'>프로젝트 이름</div>
                <div className='cardSub'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam laboriosam maxime quis voluptate at ut, incidunt quae quisquam ipsa reprehenderit.</div>
            </div>
        </div>
    )
}

export default ProjectCard