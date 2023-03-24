import React, { useState } from 'react'
import { Carousel } from 'antd';

function Carousels() {
  const [compressedImage, setCompressedImage] = useState(null);

  const handleImageCompression = (file) => {
    new Compressor(file, {
      quality: 0.6, // set the image quality to 60%
      success: (compressedResult) => {
        const reader = new FileReader();
        reader.readAsDataURL(compressedResult);
        reader.onloadend = () => {
          setCompressedImage(reader.result);
        };
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  };
  return (
    <Carousel autoplay className='mb-14 lg:mb-20 rounded-md focus:border-none z-0 relative'>
        <div className='w-full h-fit lg:h-96 bg-center object-cover rounded-md'>
          {
            compressedImage ? (
              <img src="/banner-1.svg" alt="promo-1" />
            ) : (
              <img
               
                src="/banner-1.svg"
                alt="promo-1"
                onLoad={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleImageCompression(e.target.files[0])
                  }
                }}
              />
            )
          }
        </div>
        <div className='w-full h-fit lg:h-96 bg-center object-cover rounded-md'>
          {
            compressedImage ? (
              <img src="/banner-2.svg" alt="promo-2" />
            ) : (
              <img
               
                src="/banner-2.svg"
                alt="promo-2"
                onLoad={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleImageCompression(e.target.files[0])
                  }
                }}
              />
            )
          }
        </div>
        <div className='w-full h-fit lg:h-96 bg-center object-cover rounded-md'>
          {
            compressedImage ? (
              <img src="/banner-1.svg" alt="promo-1" />
            ) : (
              <img
               
                src="/banner-1.svg"
                alt="promo-1"
                onLoad={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleImageCompression(e.target.files[0])
                  }
                }}
              />
            )
          }
        </div>
    </Carousel>
  )
}

export default Carousels