import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import kimdongill from '../images/name.svg'
import light from "../images/ph_sun.svg"
import dark from "../images/fe_moon.svg"

function Header({ handleSetMode }) {

    const [mode, setMode] = useState("dark")

    const handleMode = () => {
        const newMode = mode === "dark" ? "light" : "dark";
        setMode(newMode);
        handleSetMode(newMode);
    };

    return (
        <>
            <div className='headerWrap'>
                <div className='logo'><img src={kimdongill} alt="" /></div>
                <div className='menuWrap'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/techstack">Tech Stack</Link></li>
                        <li><Link to="/project">Project</Link></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Header