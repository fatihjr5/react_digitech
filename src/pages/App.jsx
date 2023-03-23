import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { CardMini, Cards } from '../components/cards'
import { Link } from 'react-router-dom'
import { commerce } from '../lib/commerce'
// icons
import { HiOutlineExternalLink } from 'react-icons/hi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Carousels from '../components/carousel'

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);

  // get Product
  const getProduct = async() => {
    const { data } = await commerce.products.list();
    setProduct(data);
    console.log(data)
    setLoading(false)
  }
  // add cart
  const getCart =  async() => {
    setCart(await commerce.cart.retrieve());
  }
  const handleGetCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  }
  // render
  useEffect(()=>{
    getProduct();
    getCart();
  },[])

  return (
    <Layout handleGetCart={handleGetCart} cart={cart}>
      {/* Banner */}
      <Carousels/>
      {/* Latest */}
      <section className="flex flex-col gap-y-10 mb-20">
        <h5 className='text-3xl font-medium'>Fresh From <br /> Oven</h5>
          {loading ? (
            <AiOutlineLoading3Quarters className='animate-spin duration-75 mx-auto'/>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                  product.map((item, i) => (i < 3 &&
                    <Cards 
                      key={item.id} 
                      id={item.id} 
                      title={item.name} 
                      stock={item.inventory.available} 
                      image={item.image.url} 
                      price={item.price.formatted}
                      addCart={()=>handleGetCart(item.id, 1)}
                    />
                  ))
                }
              </div>
          )}
      </section>
      {/* Most People Searched */}
      <section className="flex flex-col gap-y-10 mb-20">
        <h5 className='text-3xl font-medium'>Most People<br />Looking For</h5>
          {loading ? (
            <AiOutlineLoading3Quarters className='animate-spin duration-75 mx-auto'/>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                  product.map((item, i) => (i < 8 &&
                    <CardMini 
                      key={item.id} 
                      url={item.id} 
                      title={item.name} 
                      stock={item.inventory.available} 
                      image={item.image.url} 
                      price={item.price.formatted}
                      addCart={()=>handleGetCart(item.id, 0)}
                    />
                  ))
                }
              </div>
          )}
      </section>
      {/* Crazy Deals */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <div className="flex flex-col justify-between space-y-8">
          {/* first Card */}
          <div className="bg-[#FAFAFC] shadow-md rounded-lg">
            <div className="p-8 flex flex-col gap-y-2">
              <h5 className='text-3xl font-bold'>Upgrade to our all-in-one <br className='hidden lg:block'/> solution for labs and offices.</h5>
              <Link to="" className='text-base font-medium text-blue-700 flex items-center gap-x-1'>
                <p>See Package</p>
                <HiOutlineExternalLink/>
              </Link>
            </div>
            <img className='w-full lg:w-96 lg:ml-auto' src="Nothing Phone 1.svg" alt="" />
          </div>
          {/* second Card */}
          <div className="p-8 bg-[#FAFAFC] shadow-md rounded-lg">
            <div className="flex flex-col gap-y-2">
              <h5 className='text-3xl font-bold'>Shop with confidence, even <br className='hidden lg:block'/> on a tight budget!</h5>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <p className='text-base font-normal'>Our second-tier option comes<br className='hidden lg:block'/>with an unbeatable guarantee.</p>
                <Link to="" className='text-base font-medium text-blue-700 flex items-center gap-x-1 mt-4 lg:mt-0'>
                  <p>See Package</p>
                  <HiOutlineExternalLink/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 bg-[#FAFAFC] shadow-md rounded-lg">
          <div className="flex flex-col gap-y-2 mb-8">
            <h5 className='text-3xl font-bold'>Upgrade to our all-in-one <br className='hidden lg:block'/> solution for labs and offices.</h5>
            <Link to="" className='text-base font-medium text-blue-700 flex items-center gap-x-1'>
              <p>See Package</p>
              <HiOutlineExternalLink/>
            </Link>
          </div>
          <img src="Mac Studio.svg" alt="" />
        </div>
      </section>
    </Layout>
  )
}

export default App