import React from 'react'
import ProjectCard from './ProjectCard'
import ak from '../images/ak.svg'
import kimaeimg from '../images/kimae.svg'
import DDIJimg from '../images/DDIJ.svg'
import star from '../images/star.svg'
import { Link } from 'react-router-dom'

function Project() {
    const AKindustry = {
        idx: 1,
        image: ak,
        title: "애경산업",
        content: "하나의 샘플 사이트를 보고 작업했습니다. back은 없고 front만 작업을 하였고 bootstrap grid를 사용하였습니다. open weather api를 사용하여 날씨 정보를 확인할 수 있고 kakao map api를 사용하여 지도에 확인할 수 있게 했습니다.",
        youtube: true,
        figma: false,
        github: true,
        netrifiy: true
    }
    const Kimae = {
        idx: 2,
        image: kimaeimg,
        title: "Kimae 쇼핑몰",
        content: "개발을 공부하고 첫 프로젝트입니다. spring boot, 타임리프, oracle을 사용했습니다. 로그인/회원가입 기능이 있고 상품을 구매할 수는 있지만 실제로 결제하는 기능은 없습니다. 장바구니 기능도 있고 마이페이지에서 구매 목록과 장바구니 목록을 확인할 수 있습니다.",
        youtube: true,
        figma: false,
        github: true,
        netrifiy: false
    }
    const DDIJ = {
        idx: 3,
        image: DDIJimg,
        title: "댕댕일주",
        content: "반려견 산책 사이트입니다. 5명의 팀원들과 함께한 프로젝트이고 spring boot, react, dbeaver를 사용했습니다. 자신의 강아지를 등록하고 주변 산책 모임을 확인하고 참여할 수 있습니다. 또한 직접 모임을 생성하고 만남을 주도할 수 있습니다. 블로그형식의 반려견 자랑하는 기능도 있습니다.",
        youtube: true,
        figma: true,
        github: true,
        netrifiy: false
    }
    const starforest = {
        idx: 4,
        image: star,
        title: "별숲",
        content: "캠퍼들을 위한 사이트입니다. spring boot, react, dbeaver를 사용했고 공공데이터 3000개중 경기도 지역의 1000개 캠핑장 데이터를 가져와 사용했습니다. kakao map api와 open weather api를 사용하였고 카카오페이로 결제가 가능합니다. 캠핑 용품을 구매할 수 있습니다.",
        youtube: true,
        figma: true,
        github: true,
        netrifiy: false
    }
    const list = [AKindustry, Kimae, DDIJ, starforest]

    return (
        <div className='projectWrap'>
            <div className='projectContent'>
                <div className='projectTitle title'>Project</div>
                <div className='projectSub subtitle'>"The projects I've worked on so far"</div>
            </div>
            <ul className='projectCardWrap'>
                {list.map((item, idx) => {
                    return (
                        <li key={idx}><Link to={`/projectdetail/${item?.idx}`}><ProjectCard item={item} /></Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Project