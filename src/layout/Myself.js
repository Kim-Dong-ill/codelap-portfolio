import React from 'react'
import coder from '../images/Coder_Side 1.svg'

function Myself() {
    return (
        <div className='myselfWrap'>
            <div className='myselfContent'>
                <p>효율적인 알고리즘 설계를 추구하고<br /> 안정적인 서비스를 제공하는<br /> 풀스택 개발자를 꿈꾸는 </p>
                <p><span className='myName'>"김동일"</span> 입니다.</p>
            </div>
            <div className='myselfImage'>
                <img src={coder} alt="" />
            </div>
        </div >
    )
}

export default Myself