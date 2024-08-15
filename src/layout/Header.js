import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Frame 7.svg'
import logo2 from '../images/Frame 7 (1).svg'

function Header() {
    return (
        <>
            <div className='headerWrap'>
                <div className='logo'>Developer</div>
                <div className='menuWrap'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/techstack">Tech Stack</Link></li>
                        <li><Link to="/project">Project</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header