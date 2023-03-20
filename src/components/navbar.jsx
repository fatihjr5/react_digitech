import React from 'react'
import { Link } from 'react-router-dom'
// icons
import { BsCart } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'


function Navbar({cart}) {
  return (
    <div className='flex flex-row items-center justify-between bg-white border-b border-gray-200 px-10 md:px-16 xl:px-24 py-6 w-full fixed'>
        <Link to="/">
          <img src="./digitech.svg" alt="" />
        </Link>
        <div className="flex flex-row items-center gap-x-4 ml-auto">
            <div className="flex flex-row items-center gap-x-4">
                <Link className='text-sm text-gray-500 hover:text-green-800 hover:font-medium' to="/hot-sale">Hot Sale</Link>
                <Link className='text-sm text-gray-500 hover:text-green-800 hover:font-medium' to="/new-release">New Release</Link>
                <Link className='text-sm text-gray-500 hover:text-green-800 hover:font-medium' to="/product">Product</Link>
            </div>
            <span className='text-gray-300'>|</span>
            <div className="flex flex-row items-center gap-x-4">
                <button className='flex'>
                  <BsCart className='text-base'/>
                  <div className="px-1.5 -mt-2 ml-2 py-0.5 rounded-full bg-red-500 absolute text-xs text-white">{cart.total_items}</div>
                </button>
                <button><VscAccount className='text-base'/></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar