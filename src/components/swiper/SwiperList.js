import React, {useRef} from 'react'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

function SwiperList(props) {
  const iframe0 = useRef(null)
  const iframe1 = useRef(null)
  const iframe2 = useRef(null)
  const iframe3 = useRef(null)

  const refs = [iframe0, iframe1, iframe2, iframe3]
  
  return(
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => refs.forEach(elem => elem.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'))}
    >
      <SwiperSlide style={{height: 350 + 'px', marginTop: 35 + 'px'}}><iframe ref={iframe0} title='Review' className='videoIframe' width="100%" height="90%" src="https://www.youtube.com/embed/u16I1vZeTXY?enablejsapi=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></SwiperSlide>
      <SwiperSlide style={{height: 350 + 'px', marginTop: 35 + 'px'}}><iframe ref={iframe1} title='Review' className='videoIframe' width="100%" height="90%" src="https://www.youtube.com/embed/gpu7XV-kV3A?enablejsapi=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></SwiperSlide>
      <SwiperSlide style={{height: 350 + 'px', marginTop: 35 + 'px'}}><iframe ref={iframe2} title='Review' className='videoIframe' width="100%" height="90%" src="https://www.youtube.com/embed/ryYctNPaiRc?enablejsapi=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></SwiperSlide>
      <SwiperSlide style={{height: 350 + 'px', marginTop: 35 + 'px'}}><iframe ref={iframe3} title='Review' className='videoIframe' width="100%" height="90%" src="https://www.youtube.com/embed/S0G3vBLreLg?enablejsapi=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></SwiperSlide>
    </Swiper>
  )
}

export default SwiperList