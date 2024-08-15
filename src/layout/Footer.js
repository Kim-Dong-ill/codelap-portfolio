import React from 'react'
import git from '../images/Group 1.svg'
import youtube from '../images/Group.svg'
import blog from '../images/sns blog.svg'
import { Link } from 'react-router-dom'
import logo from '../images/Frame 7.svg'

function Footer() {

    const copyToClipboard = () => {
        navigator.clipboard.writeText('ehddlf2893@naver.com')
            .then(() => {
                setTimeout(() => {
                    alert('이메일 주소가 복사되었습니다.');
                }, 500)
            })
            .catch((error) => {
                console.error('복사 중 오류가 발생했습니다:', error);
            });
    };

    return (
        <div className='footerWrap'>
            <div className='logo'>Developer</div>
            <div className='footerEmail'><button className='button-54' role="button" onClick={copyToClipboard}>ehddlf2893@naver.com</button></div>
            <div className='footerIcon'>
                <ul>
                    <Link to="https://github.com/dashboard" target="_blank"><li><img src={git} alt="" /></li></Link>
                    <Link to="https://www.youtube.com/@user-zp5pq2nb3x" target="_blank"><li><img src={youtube} alt="" /></li></Link>
                    <Link to="https://cafe.naver.com/ehddlf2893" target="_blank"><li><img src={blog} alt="" /></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer