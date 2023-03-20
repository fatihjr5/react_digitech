import React from 'react'
import { Link } from 'react-router-dom'
// icons
import { BsBox2 } from 'react-icons/bs'

export const Cards = (props) => {
  return (
    <div>
        <img className='h-52 mx-auto' src={props.image} alt={props.title} />
        <div className="mt-5 space-y-2">
            <h5 className='text-xl font-semibold'>{props.title}</h5>
            <div className="flex flex-row items-center justify-between">
                <p className='text-sm font-normal'>From <span className='font-semibold'>Rp {props.price}</span></p>
                <div className="flex flex-row items-center gap-x-1.5">
                    <BsBox2 className='w-3'/>
                    <p className='text-xs font-semibold'>{props.stock}</p>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between mt-5 gap-x-4">
            <button className="w-full p-2 ring-1 ring-gray-200 text-center rounded-md" onClick={props.addCart}>
                <p className='text-gray-400'>add to cart</p>
            </button>
            <button className="w-full p-2 ring-1 ring-black text-center rounded-md">
                <Link to={`/product/${props.title}`} className='font-semibold'>Buy Now</Link>
            </button>
        </div>
    </div>
  )
}

export const CardMini = (props) => {
  return (
    <div>
        <img className='h-40 mx-auto' src={props.image} alt={props.title} />
        <div className="mt-5 space-y-2">
            <h5 className='text-xl font-semibold'>{props.title}</h5>
            <div className="flex flex-row items-center justify-between">
                <p className='text-sm font-normal'>From <span className='font-semibold'>Rp {props.price}</span></p>
                <div className="flex flex-row items-center gap-x-1.5">
                    <BsBox2 className='w-3'/>
                    <p className='text-xs font-semibold'>{props.stock}</p>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between mt-5 gap-x-4">
            <button className="w-full p-2 ring-1 ring-gray-200 text-center rounded-md" onClick={props.addCart}>
                <p className='text-gray-400'>add to cart</p>
            </button>
            <button className="w-full p-2 ring-1 ring-black text-center rounded-md">
                <Link to={`/product/${props.title}`} className='font-semibold'>Buy Now</Link>
            </button>
        </div>
    </div>
  )
}
