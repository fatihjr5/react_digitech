import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='mt-20'>
        <div className='flex flex-col lg:flex-row justify-between gap-y-4 lg:gap-y-0 items-start px-10 md:px-16 xl:px-24 py-6'>
            <img src="./digitech.svg" alt="" />
            <section className="flex flex-col gap-y-3">
                <h5 className='text-lg font-semibold'>Product</h5>
                <div className="flex flex-col gap-y-1">
                    <Link to="/">Smartphone</Link>
                    <Link to="/">Laptop</Link>
                    <Link to="/">PC / Mac</Link>
                    <Link to="/">Accessories</Link>
                </div>
            </section>
            <section className="flex flex-col gap-y-3">
                <h5 className='text-lg font-semibold'>Need Help?</h5>
                <div className="flex flex-col gap-y-1">
                    <Link to="/">How to order</Link>
                    <Link to="/">Terms & Condition</Link>
                    <Link to="/">Privacy policy</Link>
                    <Link to="/">Guarantee / Return</Link>
                </div>
            </section>
            <section className="flex flex-col gap-y-3">
                <h5 className='text-lg font-semibold'>Payment</h5>
                <div className="grid grid-cols-3 gap-1.5">
                    <img src="./src/assets/payment/bca.svg" alt="" />
                    <img src="./src/assets/payment/dana.svg" alt="" />
                    <img src="./src/assets/payment/gopay.svg" alt="" />
                    <img src="./src/assets/payment/mastercard.svg" alt="" />
                    <img src="./src/assets/payment/paypal.svg" alt="" />
                    <img src="./src/assets/payment/qris.svg" alt="" />
                </div>
            </section>
            <section className="flex flex-col gap-y-3">
                <h5 className='text-lg font-semibold'>Shipping</h5>
                <div className="grid grid-cols-2 gap-1.5">
                    <img src="./src/assets/shipping/dhl.svg" alt="" />
                    <img src="./src/assets/shipping/fedex.svg" alt="" />
                    <img src="./src/assets/shipping/jett.svg" alt="" />
                    <img src="./src/assets/shipping/jne.svg" alt="" />
                </div>
            </section>
        </div>
        <div className="border-t border-gray-200 py-4 text-center mt-4">
            <p className='text-sm'><span className='font-bold text-gray-500'>Digitech</span> All details crafted by <Link to="https://www.fatihibrahim.com/" target='_blank'>Fatih Ibrahim</Link>. Not associate with anyone</p>
        </div>
    </div>
  )
}

export default Footer