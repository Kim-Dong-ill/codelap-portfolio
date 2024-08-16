import React from 'react'
import '../css/card.scss'

function ProjectCard({ item }) {
    return (
        <div className='cardWrap'>
            <div className='cardImage'><img src={item?.image} alt="" /></div>
            <div className='cardContent'>
                <div className='cardTitle'>{item?.title}</div>
                <div className='cardSub'>{item?.content}</div>
            </div>
        </div>
    )
}

export default ProjectCard