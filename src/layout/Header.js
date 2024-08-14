import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='headerWrap'>
                <div className='logo'>logo</div>
                <div className='menuWrap'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Tech Stack</Link></li>
                        <li><Link to="/">Project</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header