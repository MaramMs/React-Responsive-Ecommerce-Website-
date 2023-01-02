import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation,Pagination} from 'swiper'
import {SliderProducts} from '../../data/products.js'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css'

const Slider = () => {
  return (
    <div className="s-container">
  <Swiper 
  modules={[Navigation,Pagination]}
  slidesPerView={3}
  spaceBetween={40}
  navigation
  pagination={{ clickable: true }}
  loopFillGroupWithBlank
  slidesPerGroup={1}
  loop
  >
    {
    SliderProducts.map((product)=>(
        <SwiperSlide>
            <div className="left-s">
               <div className="names">
                <span>{product.name}</span>
                <span>{product.detail}</span>
               </div>
               <span className='price'>{product.price} $</span>
               <button>Shope Now</button>
            </div>
            <img src={product.img} alt="Product" className='img-p' />
        </SwiperSlide>
    ))
   }
 
  </Swiper>
  
  </div>
  )
}

export default Slider
