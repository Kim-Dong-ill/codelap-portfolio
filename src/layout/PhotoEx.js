import React from 'react'
import '../css/photoEx.scss'
import ak1 from '../images/akimg1.svg'
import ak2 from '../images/akimage2.svg'
import ak3 from '../images/akimage3.svg'
import ak4 from '../images/akimage4.svg'
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
                    <div className='ascImg'><img src={ak1} alt="" /></div>
                    <div className='ascEx'> </div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={ak4} alt="" /></div>
                    <div className='ascEx'></div>
                </div>
                <div className='ascPhotoWrap'>
                    <div className='ascImg'><img src={ak2} alt="" /></div>
                    <div className='ascEx'></div>
                </div>
                <div className='dscPhotoWrap'>
                    <div className='ascImg'><img src={ak3} alt="" /></div>
                    <div className='ascEx'></div>
                </div>
            </div> : ""}

        </>
    )
}

export default PhotoEx