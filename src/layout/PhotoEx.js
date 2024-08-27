import React from 'react'
import '../css/photoEx.scss'
import ak1 from '../images/akimg1.svg'
import ak2 from '../images/akimage2.svg'
import ak3 from '../images/akimage3.svg'
import ak4 from '../images/akimage4.svg'
import k1 from '../images/kmae1.svg'
import k2 from '../images/kmae2.svg'
import k3 from '../images/kmae3.svg'
import k4 from '../images/kmae4.svg'
import k5 from '../images/kmae5.svg'
import k6 from '../images/kmae6.svg'
import k7 from '../images/kmae7.svg'
import dd1 from '../images/dd1.svg'
import dd2 from '../images/dd2.svg'
import dd3 from '../images/dd3.svg'
import dd4 from '../images/dd4.svg'
import dd5 from '../images/dd5.svg'
import dd6 from '../images/dd6.svg'
import st1 from '../images/Frame 447.svg'
import st2 from '../images/Frame 451.svg'
import st3 from '../images/Frame 455.svg'
import st4 from '../images/Frame 456.svg'
import st5 from '../images/Frame 457.svg'
import st6 from '../images/Frame 458.svg'
import st7 from '../images/Frame 459.svg'
import st8 from '../images/Frame 460.svg'
import st9 from '../images/Frame 461.svg'
import st10 from '../images/Frame 462.svg'
import st11 from '../images/Frame 463.svg'
import st12 from '../images/Loding.svg'
import { useParams } from 'react-router-dom'


function PhotoEx() {
    const { id } = useParams()

    return (
        <>
            {id == 1 ? <div className='photoExWrap'>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={ak1} alt="" /></div>
                    <div className='ascEx'>시간이 지나면 페이드로 변하는 메인 페이지 </div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={ak4} alt="" /></div>
                    <div className='ascEx'>마우스를 올리거나 스크롤을 내리면 변하는 메뉴바</div>
                </div>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={ak2} alt="" /></div>
                    <div className='ascEx'>스와이퍼로 슬라이드되는 이미지</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={ak3} alt="" /></div>
                    <div className='ascEx'>이미지뿐 아니라 글도 함께 슬라이드</div>
                </div>
            </div> : ""}
            {id == 2 ? <div className='photoExWrap'>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={k1} alt="" /></div>
                    <div className='ascEx'>맨 처음 보이는 <br />로딩화면</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={k2} alt="" /></div>
                    <div className='ascEx'>스크롤에 반응하여 <br />나타나는 사진과 글</div>
                </div>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={k3} alt="" /></div>
                    <div className='ascEx'>심플한 로그인 페이지</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={k4} alt="" /></div>
                    <div className='ascEx'>색상, 사이즈, 수량<br /> 구매정보와 가격 표시</div>
                </div>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={k5} alt="" /></div>
                    <div className='ascEx'>구매후 상세페이지에서<br /> 볼 수 있는 구매목록</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={k6} alt="" /></div>
                    <div className='ascEx'>장바구니에 담기하면 <br />보이는 상품 정보와 상세보기</div>
                </div>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={k7} alt="" /></div>
                    <div className='ascEx'>유저의 정보와<br /> 상세정보 수정가능</div>
                </div>
            </div> : ""}
            {id == 3 ? <div className='photoExWrap'>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={dd1} alt="" /></div>
                    <div className='ascEx'>회원가입시 반려견 유무와 이메일 중복체크, <br />비밀번호 확인, <br />이미지 등록</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={dd6} alt="" /></div>
                    <div className='ascEx'>상단에는 유저의 주소<br /> 주변의 반려견들과<br /> 내위치보기로 현재위치, 지도를 드래그해서 현위치 검색으로 지도 중심 주변 모임확인</div>
                </div>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={dd2} alt="" /></div>
                    <div className='ascEx'>반려견을 자랑할 수 있는 게시판 형식의 페이지</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={dd3} alt="" /></div>
                    <div className='ascEx'>출발지와 목적지를<br />지도에서 설정후 <br />모임 만들기 가능</div>
                </div>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={dd4} alt="" /></div>
                    <div className='ascEx'>회원정보 수정 중복체크, 기존 비밀번호 확인후<br />수정 가능</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={dd5} alt="" /></div>
                    <div className='ascEx'>3마리의 반려견 등록과<br /> 대표견 설정 가능</div>
                </div>
            </div> : ""}
            {id == 4 ? <div className='photoExWrap'>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={st12} alt="" /></div>
                    <div className='ascEx'>로딩화면에서 로그인 유무 확인 후 이동 경로 설정</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={st1} alt="" /></div>
                    <div className='ascEx'>이메일 인증 가능</div>
                </div>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={st2} alt="" /></div>
                    <div className='ascEx'>보기 편안한 디자인</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={st3} alt="" /></div>
                    <div className='ascEx'>1000개의 캠핑장<br /> 마커 표시</div>
                </div>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={st4} alt="" /></div>
                    <div className='ascEx'>공공데이터의 캠핑장 정보와 지역 날씨 정보, 카카오결제 시스템</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={st5} alt="" /></div>
                    <div className='ascEx'>해시태그와 이미지,<br /> 별숲 기록 작성 가능</div>
                </div>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={st6} alt="" /></div>
                    <div className='ascEx'>별숲 스토어 페이지와<br /> 카테고리별 검색 기능</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={st7} alt="" /></div>
                    <div className='ascEx'>상품 상세보기와 상품에 달린 리뷰 보기</div>
                </div>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={st8} alt="" /></div>
                    <div className='ascEx'>상품 구매시 배송정보<br /> 입력과 상세 주소 입력</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={st9} alt="" /></div>
                    <div className='ascEx'>마이페이지에서 등급별 <br />할인 확인가능 </div>
                </div>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={st10} alt="" /></div>
                    <div className='ascEx'>내가 예약한 캠핑장 <br />상세 정보 확인 가능</div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={st11} alt="" /></div>
                    <div className='ascEx'>내가 구매한 상품과 <br />리뷰 작성 가능</div>
                </div>

            </div> : ""}

        </>
    )
}

export default PhotoEx