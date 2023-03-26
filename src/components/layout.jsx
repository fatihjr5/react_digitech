import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

function Layout({children, handleGetCart, cart}) {
  return (
    <div>
        <Navbar handleGetCart={handleGetCart} cart={cart}/>
        <section className='pt-28 px-10 md:px-16 xl:px-24'>
            {children}
        </section>
        <Footer/>
    </div>
  )
}

export default Layout