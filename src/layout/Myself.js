import React from 'react'
import coder from '../images/Coder_Side 1.svg'

function Myself() {
    return (
        <div className='myselfWrap'>
            <div className='myselfContent'>
                <p>안녕하세요</p>
                <p>~~개발자를 꿈꾸는 주니어 개발자</p>
                <p>김동일 입니다.</p>
            </div>
            <div className='myselfImage'>
                <img src={coder} alt="" />
            </div>
        </div >
    )
}

export default Myself