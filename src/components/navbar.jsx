import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// components
import { Drawer } from 'antd';
// icons
import { BsCart } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { HiMenuAlt4 } from 'react-icons/hi';


function Navbar({cart}) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const totalItems = cart ? cart.total_items : 0;
  const location = useLocation();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='flex flex-row items-center justify-between bg-white border-b border-gray-200 px-10 md:px-16 xl:px-24 py-6 w-full fixed z-50'>
        <Link to="/">
          <img src="/digitech.svg" alt="" />
        </Link>
        <div className="lg:flex flex-row items-center gap-x-4 ml-auto hidden">
            <div className="flex flex-row items-center gap-x-4">
            <Link className={`text-sm text-gray-500 hover:text-green-800 ${location.pathname === '/hot-sale' ? 'font-semibold text-green-800' : 'hover:font-semibold'}`} to="/hot-sale">
              Hot Sale
            </Link>
            <Link className={`text-sm text-gray-500 hover:text-green-800 ${location.pathname === '/product' ? 'font-semibold text-green-800' : 'hover:font-semibold'}`} to="/product">
              Product
            </Link>
            <Link className={`text-sm text-gray-500 hover:text-green-800 ${location.pathname === '/how-to-order' ? 'font-semibold text-green-800' : 'hover:font-semibold'}`} to="/new-release">
              How to order
            </Link>
            </div>
            <span className='text-gray-300'>|</span>
            <div className="flex flex-row items-center gap-x-4">
                <Link className='flex' to="/cart">
                  <BsCart className='text-base'/>
                  <div className="px-1.5 -mt-2 ml-2 py-0.5 rounded-full bg-red-500 absolute text-xs text-white">{totalItems > 10 ? '9+' : totalItems}</div>
                </Link>
                <button><VscAccount className='text-base'/></button>
            </div>
        </div>
        {/* mobile menu */}
        <div className='block lg:hidden'>
          <div className="flex flex-row items-center gap-x-6">
            {/* cart */}
            <Link className='flex' to="/cart">
              <BsCart className='text-lg'/>
              <div className="w-auto h-auto px-1.5 py-0.5 -mt-2 ml-2 rounded-full bg-red-500 absolute text-xs text-white">{totalItems > 10 ? '9+' : totalItems}</div>
            </Link>
            {/* drawer */}
            <div>
              <button onClick={showDrawer} className='mt-2'>
                <HiMenuAlt4 className='text-lg'/>
              </button>
              <Drawer placement={placement} closable={false} onClose={onClose} open={open} key={placement}>
                <div className="flex flex-col items-start gap-y-4 mb-4">
                  <Link className={`text-base text-gray-500 hover:text-green-800 ${location.pathname === '/hot-sale' ? 'font-semibold text-green-800' : 'hover:font-semibold'}`} to="/hot-sale">
                    Hot Sale
                  </Link>
                  <Link className={`text-base text-gray-500 hover:text-green-800 ${location.pathname === '/product' ? 'font-semibold text-green-800' : 'hover:font-semibold'}`} to="/product">
                    Product
                  </Link>
                  <Link className={`text-base text-gray-500 hover:text-green-800 ${location.pathname === '/how-to-order' ? 'font-semibold text-green-800' : 'hover:font-semibold'}`} to="/new-release">
                    How to order
                  </Link>
                </div>
                <Link>
                  <p className="w-full py-2 ring-1 ring-green-700 rounded-md text-center font-medium text-green-700 text-base">Login</p>
                </Link>
              </Drawer>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar