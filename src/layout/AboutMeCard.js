import React from 'react'
import start from '../images/noto_star.svg'
import company from '../images/ri_building-fill.svg'
import location from '../images/basil_location-outline.svg'
import calender from '../images/simple-line-icons_calender.svg'

function AboutMeCard() {
    return (
        <div className='aboutMeCardWrap'>
            <div className='aboutTitle'>
                <div className='titleContent'>나에대한 타이틀제목</div>
                <div className='titleImg'><img src={start} alt="" /></div>
            </div>
            <div className='aboutSubTitle'>
                <div className='subTitle'>
                    <div className='subTitleContent'><img src={company} alt="" />상세 서브 타이틀 제목</div>
                    <div className='subTitleLoc'><img src={location} alt="" />지역</div>
                </div>
                <div className='subCalender'><img src={calender} alt="" />2024.01 ~ 2024.05</div>
            </div>
        </div>
    )
}

export default AboutMeCard