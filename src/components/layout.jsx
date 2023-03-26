import React, { useEffect } from 'react'
import Navbar from './navbar'
import Footer from './footer'

function Layout({children, handleGetCart, cart}) {
  useEffect(() => {
    const clearCart = async () => {
      await commerce.cart.empty();
      setCart({}); // Assuming you have a state for setting the cart
    };

    clearCart();
  }, []);
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