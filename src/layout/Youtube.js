import React from 'react'
import "../css/youtube.scss"
import { useParams } from 'react-router-dom'

function Youtube({ list }) {
    const { id } = useParams()
    const idx = id - 1
    return (
        <div className='youtubeWrap'>
            <iframe width="1280" height="720" src={list[idx]?.src} title={list[idx]?.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}
export default Youtube