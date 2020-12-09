import React from 'react'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

function SwiperList(props) {
  return(
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide style={{height: 350 + 'px', marginTop: 35 + 'px'}}><iframe title='Review' className='videoIframe' width="100%" height="90%" src="https://www.youtube.com/embed/u16I1vZeTXY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></SwiperSlide>
      <SwiperSlide style={{height: 350 + 'px', marginTop: 35 + 'px'}}><iframe title='Review' className='videoIframe' width="100%" height="90%" src="https://www.youtube.com/embed/gpu7XV-kV3A" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></SwiperSlide>
      <SwiperSlide style={{height: 350 + 'px', marginTop: 35 + 'px'}}><iframe title='Review' className='videoIframe' width="100%" height="90%" src="https://www.youtube.com/embed/ryYctNPaiRc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></SwiperSlide>
      <SwiperSlide style={{height: 350 + 'px', marginTop: 35 + 'px'}}><iframe title='Review' className='videoIframe' width="100%" height="90%" src="https://www.youtube.com/embed/S0G3vBLreLg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></SwiperSlide>
    </Swiper>
  )
}

export default SwiperList