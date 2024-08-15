import React from 'react'
import git from '../images/Group 1.svg'
import youtube from '../images/Group.svg'
import blog from '../images/sns blog.svg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footerWrap'>
            <div className='footerLogo'><img src="" alt="" />로고</div>
            <div className='footerEmail'><Link>ehddlf2893@naver.com</Link></div>
            <div className='footerIcon'>
                <ul>
                    <Link><li><img src={git} alt="" /></li></Link>
                    <Link><li><img src={youtube} alt="" /></li></Link>
                    <Link><li><img src={blog} alt="" /></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer