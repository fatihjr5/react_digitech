import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import { CardMini } from '../../components/cards'
import { commerce } from '../../lib/commerce'

function Index() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState({});
  const [searchText, setSearchText] = useState('');

  // get Product
  const getProduct = async() => {
    const { data } = await commerce.products.list();
    setProduct(data);
  }
  // add cart
  const getCart =  async() => {
    setCart(await commerce.cart.retrieve());
  }
  const handleGetCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  }
  // search product 
  const filteredProduct = product.filter((item) => {
    return item.name.toLowerCase().includes(searchText.toLowerCase());
  });
  // render
  useEffect(()=>{
    getProduct();
    getCart();
  },[])
  return (
    <Layout handleGetCart={handleGetCart} cart={cart}>
        <section className="flex flex-col mx-auto gap-y-10">
            <h5 className="text-3xl font-medium text-center">Your One-Stop Shop for <br /> the Hottest Products</h5>
            <input type="text" placeholder='Search Here' className='mx-auto border-b w-96 pl-4 pb-1 focus:outline-none' onChange={(e) => setSearchText(e.target.value)} />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-20">
          {
            filteredProduct.map((item) => 
              <CardMini 
                key={item.id} 
                title={item.name} 
                stock={item.inventory.available} 
                image={item.image.url} 
                price={item.price.formatted}
                addCart={()=>handleGetCart(item.id, 1)}
              />)
          }
        </section>
    </Layout>
  )
}

export default Index