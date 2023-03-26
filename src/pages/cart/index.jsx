import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { commerce } from '../../lib/commerce';
import { AiOutlineInbox, AiOutlineLoading3Quarters } from 'react-icons/ai';

const Carts = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const { data } = await commerce.products.list();
    const products = data.map(({ id, name, price, image }) => ({
      id,
      name,
      price,
      image: image.url,
    }));
    setProducts(products);
  };

  const getCart = async () => {
    setCart(await commerce.cart.retrieve());
    setLoading(false);
  };

  const handleGetCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  }

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response.cart);
  };  

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  const cartItems = cart.line_items || [];

  const filteredProducts = products.filter(product =>
    cartItems.some(item => item.product_id === product.id)
  );

  let totalItems;
  if (filteredProducts.length > 0) {
    totalItems = (
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price.formatted_with_symbol}</p>
            <button onClick={() => handleRemoveFromCart(product.id)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    );
  } else {
    totalItems = (
      <div className='flex flex-col space-y-2 text-center mt-20'>
        <AiOutlineInbox className='text-7xl mx-auto text-gray-300'/>
        <p className='text-lg font-medium text-gray-300'>Not Found</p>
      </div>
    );
  }

  return (
    <Layout handleGetCart={handleGetCart} cart={cart}>
        { loading ? (
          <AiOutlineLoading3Quarters className='animate-spin duration-75 mx-auto mt-20'/>
        ) : (
          totalItems
        )}
    </Layout>
  );
};

export default Carts;