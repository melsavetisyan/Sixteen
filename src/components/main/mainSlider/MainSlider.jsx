import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";
import bgimg from '../image/bgimg.jpg'
import bgimg2 from '../image/bgimg2.jpg'
import bgimg3 from '../image/bgimg3.jpg'

export default function MainSlider() {
    const slides = [
        {image:bgimg, tittle:'BEST OFFER', des:'NEW ARRIVALS ON SALE'},
        {image:bgimg2, tittle:'FLASH DEALS', des:'GET YOUR BEST PRODUCTS'},
        {image:bgimg3, tittle:'LAST MINUTE', des:'GRAB LAST MINUTE DEALS'}
    ]
  return (
    <>
        <Swiper pagination={{clickable: true}} modules={[Pagination]} className="mySwiper">
            {slides.map((slide, index) => <SwiperSlide key={index}><img src={slide.image} alt="" />  <div className="slideDescription"> <h2 className="tittle">{slide.tittle}</h2> <h4 className="description">{slide.des}</h4></div></SwiperSlide>  ) }
        </Swiper>
    </>
  );
}