import React from 'react'
import { Carousel } from 'antd';

function Carousels() {
  return (
    <Carousel autoplay className='mb-14 lg:mb-20 rounded-md focus:border-none z-0 relative'>
        <div className='w-full h-fit lg:h-96 bg-center object-cover rounded-md'>
          <img src="/banner-1.svg" alt="" />
        </div>
        <div className='w-full h-fit lg:h-96 bg-center object-cover rounded-md'>
          <img src="/banner-2.svg" alt="" />
        </div>
        <div className='w-full h-fit lg:h-96 bg-center object-cover rounded-md'>
          <img src="/banner-1.svg" alt="" />
        </div>
    </Carousel>
  )
}

export default Carousels