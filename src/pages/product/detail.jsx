import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout';
import { commerce } from '../../lib/commerce';

function Detail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = async(id) => {
    const { data } = await commerce.products.retrieve(id);
    setProduct(data);
  }

  useEffect(() => {
    getProduct()
  }, [id]);

  return (
    <Layout>
      {
        product ? 
          <div>
            <h5>{product.name}</h5>
          </div>
          : <p className='mt-60'>Loading...</p>
      }
    </Layout>
  );
}

export default Detail;