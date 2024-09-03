import React from 'react'
import start from '../images/noto_star.svg'
import company from '../images/ri_building-fill.svg'
import location from '../images/basil_location-outline.svg'
import calender from '../images/simple-line-icons_calender.svg'
import arrow from '../images/clarity_child-arrow-line.svg'
import check from '../images/entypo_check (1).svg'
import { Link } from 'react-router-dom'

function AboutMeCard({ item }) {


    return (
        <div className='aboutMeCardWrap'>
            <div className='aboutTitle'>
                <div className='titleContent'><Link to={item.link ? item.link : null}>{item?.title}</Link></div>
                {item?.import == true ? <div className='titleImg'><img src={start} alt="" /></div> : ""}
            </div>
            <div className='aboutSubTitle'>
                <div className='subTitle'>
                    <div className='subTitleContent'><img src={company} alt="" />{item?.subtitle}</div>
                    <div className='subTitleLoc'><img src={location} alt="" />{item?.location}</div>
                </div>
                <div className='subCalender'><img src={calender} alt="" />{item?.startDate} ~ {item?.endDate}</div>
            </div>
            {item?.detail.length > 1 ? item.detail.map((item, idx) => { return <div key={idx} className='asdasd'><img src={arrow} alt="" /> {item.task}<img src={check} alt="" /></div> }) : item?.detail[0].task != "" ? <div className='subImport'><img src={arrow} alt="" /> {item?.detail[0].task} <img src={check} alt="" /></div> : ""}
        </div>
    )
}

export default AboutMeCard