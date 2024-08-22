import React from 'react'
import figma from '../images/figmalogo.svg'
import youtube from '../images/YouTube Logo.svg'
import github from '../images/gitlogo.svg'
import netri from '../images/netrilogo.svg'
import '../css/logoLink.scss'
import { Link, useParams } from 'react-router-dom'

function LogoLink({ list }) {
    const { id } = useParams()
    const idx = id - 1
    return (
        <div key={idx} className='logoLinkWrap'>
            {list[idx].figma === true ? <Link target='_blank' to={list[idx].figLink}><div><img src={figma} alt="" /></div></Link> : ""}
            {list[idx].youtube === true ? <Link target='_blank' to={list[idx].youLink}><div><img src={youtube} alt="" /></div></Link> : ""}
            {list[idx].github === true ? <Link target='_blank' to={list[idx].gitLink}><div><img src={github} alt="" /></div></Link> : ""}
            {list[idx].gitLink2 === null ? "" : <Link target='_blank' to={list[idx].gitLink2}><div><img src={github} alt="" /></div></Link>}
            {list[idx].netrifiy === true ? <Link target='_blank' to={list[idx].netLink}><div><img src={netri} alt="" /></div></Link> : ""}
        </div>
    )
}

export default LogoLink