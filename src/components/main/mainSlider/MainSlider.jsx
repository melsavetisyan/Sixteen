import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";
import bgimg from '../image/bgimg.jpg'
import bgimg2 from '../image/bgimg2.jpg'
import bgimg3 from '../image/bgimg3.jpg'

// import sliderStyle from './sliderStyle.module.css'

// function MainSlider(e){
//     // const [index, setIndex] = useState(0)
//     // const slides = [
//     //     {image:bgimg, tittle:'BEST OFFER', des:'NEW ARRIVALS ON SALE'},
//     //     {image:bgimg2, tittle:'FLASH DEALS', des:'GET YOUR BEST PRODUCTS'},
//     //     {image:bgimg3, tittle:'LAST MINUTE', des:'GRAB LAST MINUTE DEALS'}
//     // ]

//     // const styles= {
//     //     parent:{
//     //         backgroundImage: `url(${slides[index].image})`,
//     //         height:'100vh',
//     //         width: '100%',
//     //         userSelect:'none',
//     //         paddingTop: "250px",
//     //         backgroundRepeat: 'no-repeat',
//     //         textAlign:'center',
//     //         backgroundSize: 'cover'
//     //     }}
//     // const changeIndex = (ind) => setIndex(ind)

//     // return(
//     //     <div style={styles.parent}>
//     //             <div className="container">
//     //             <div className={sliderStyle.titAndDes}>
//     //                 <h4 className={sliderStyle.tittle}>{slides[index].tittle}</h4>
//     //                 <h5 className={sliderStyle.h4}>{slides[index].des}</h5>
//     //             </div>
//     //             <div className={sliderStyle.btns}>
//     //                 <button className={sliderStyle.button} onClick={()=>changeIndex(0)}></button>
//     //                 <button className={sliderStyle.button} onClick={()=>changeIndex(1)}></button>
//     //                 <button className={sliderStyle.button} onClick={()=>changeIndex(2)}></button>
//     //             </div>
//     //         </div>
//     //     </div>
//     // )
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide><img src={bgimg} alt="" /></SwiperSlide>
//       <SwiperSlide><img src={bgimg} alt="" /></SwiperSlide>
//       <SwiperSlide><img src={bgimg} alt="" /></SwiperSlide>
//       <SwiperSlide><img src={bgimg} alt="" /></SwiperSlide>
//     </Swiper>
// }

// export default MainSlider

// Import Swiper React components

// Import Swiper styles



// import required modules


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
