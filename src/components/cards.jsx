import React from 'react'
import { Link } from 'react-router-dom'
// icons
import { BsBox2,BsCart } from 'react-icons/bs'
import { Tooltip } from 'antd'

export const Cards = (props) => {
  return (
    <div>
        <img className='h-52 mx-auto' src={props.image} alt={props.title} />
        <div className="mt-5 space-y-2">
            <h5 className='text-xl font-semibold'>{props.title}</h5>
            <div className="flex flex-row items-center justify-between">
                <p className='text-sm font-normal'>From <span className='font-semibold'>Rp {props.price}</span></p>
                <Tooltip title="Ready Stock">
                    <div className="flex flex-row items-center gap-x-1.5">
                        <BsBox2 className='w-3'/>
                        <p className='text-xs font-semibold'>{props.stock}</p>
                    </div>
                </Tooltip>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between mt-5 gap-x-2">
            <button className="w-full p-2 ring-1 ring-green-800 text-green-800 text-center rounded-md">
                <Link to={`/product/${props.id}`} className='font-semibold'>Buy Now</Link>
            </button>
            <button className="w-fit p-2 ring-1 ring-slate-500 hover:bg-slate-400 text-slate-500 duration-100 ease-in hover:text-white hover:ring-0 text-center rounded-md" onClick={props.addCart}>
                <BsCart/>
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
                <Tooltip title="Ready Stock">
                    <div className="flex flex-row items-center gap-x-1.5">
                        <BsBox2 className='w-3'/>
                        <p className='text-xs font-semibold'>{props.stock}</p>
                    </div>
                </Tooltip>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between mt-5 gap-x-4">
            <button className="w-full p-2 ring-1 ring-green-800 text-green-800 text-center rounded-md">
                <Link to={`/product/${props.url}`} className='font-semibold'>Buy Now</Link>
            </button>
            <button className="w-fit p-2 ring-1 ring-slate-500 hover:bg-slate-400 text-slate-500 duration-100 ease-in hover:text-white hover:ring-0 text-center rounded-md" onClick={props.addCart}>
                <BsCart/>
            </button>
        </div>
    </div>
  )
}
