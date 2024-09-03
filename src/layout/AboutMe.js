import React from 'react'
import AboutMeCard from './AboutMeCard'
import '../css/aboutMe.scss'

function AboutMe() {
    const exper = [
        { title: "수원대학교", import: true, subtitle: "체육학과 스포츠과학부", location: "경기도 화성시 봉담읍", startDate: "2016.03", endDate: "2023.02", detail: [{ task: "학과 수석 졸업" }] },
        { title: "이미지포커스", import: true, subtitle: "머신비젼 및 CCD CAMERAS 전문회사 이미지포커스", location: "경기도 광명시", startDate: "2019.04", endDate: "2019.10", detail: [{ task: "디스플레이 & 광학 조절, 테스트" }] },
        { title: "생활체육지도사", import: false, subtitle: "생활체육지도사 보디빌딩", location: "문화체육관광부", startDate: "2019.11.08", endDate: "2019.11.08", detail: [{ task: "" }] },
        { title: "컴퓨터활용능력", import: true, subtitle: "컴퓨터활용능력2급", location: "대한상공회의소", startDate: "2022.12.16", endDate: "2022.12.16", detail: [{ task: "" }] },
        { title: "한국경제 TESAT", import: false, subtitle: "한국경제 TESAT 2급", location: "한국경제", startDate: "2023.04.15", endDate: "2025.04.15", detail: [{ task: "" }] },
    ]

    const developer = [
        { title: "이젠아카데미", link: "https://www.ezenac.co.kr/", import: true, subtitle: "(스마트웹&콘텐츠개발) 풀스택 프론트엔드&백엔드) 자바개발자 양성 D", location: "서울 구로구", startDate: "2023.06.07", endDate: "2023.11.20", detail: [{ task: "Html / Css / JS" }, { task: "Java" }, { task: "Spring Boot" }, { task: "Oracle" }] },
        { title: "코드랩아카데미", link: "https://codelabit.co.kr/", import: true, subtitle: "클라우드 활용 o2o 서비스 플랫폼 웹&앱 개발", location: "서울 가산동", startDate: "2024.02.27", endDate: "2024.08.06", detail: [{ task: "Spring Boot" }, { task: "Node" }, { task: "Dbeaver" }, { task: "Docker" }, { task: "MongoDB" }, { task: "모범상" }, { task: "우수 프로젝트상" }] },
    ]
    return (
        <div className='aboutMe'>
            <div className='aboutMeInner'>
                <div className='aboutMeTitle title'>About Me</div>
                <div className='aboutMeContent'>안녕하세요! 저는 언제나 새로운 기술을 탐험하고, 그것을 실제 프로젝트에 반영하는 것을 좋아하는 풀스택 개발자입니다.<br />지도 API부터 날씨 API, 카카오 결제 시스템, 그리고 예약 시스템까지, 프로젝트의 중요한 기능들을 직접 구현하며 성장해 왔습니다.<br />기능을 개발하는 동안에는 코드가 어떻게 하면 더 깔끔하고 단순해질 수 있을지 끊임없이 고민하려고 노력합니다.<br />저는 이런 과정 속에서 배우는 것을 매우 좋아하며, 항상 더 나은 개발자가 되기 위해 노력하고 있습니다.

                </div>
            </div>
            <div className='aboutMeEd'>
                <div className='edTitle title'>Education / Experience</div>
                <div className='edContent'>
                    {exper.map((item, idx) => {
                        return (
                            <div className='abcard' key={idx}><AboutMeCard item={item} /></div>
                        )
                    })}
                </div>
            </div>
            <div className='aboutMeDe'>
                <div className='deTitle title'>Development<br /> Education Experience</div>
                <div className='deContent'>
                    {developer.map((item, idx) => {
                        return (
                            <div className='abcard' key={idx}><AboutMeCard item={item} /></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AboutMe