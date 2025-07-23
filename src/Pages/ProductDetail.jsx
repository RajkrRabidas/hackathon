import React, { useContext } from 'react'
import { ShopContext } from '../Context/context'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const ProductDetail = () => {
    const {all_products} = useContext(ShopContext)
    const {id} = useParams();
    const product = all_products.find((e) => e.id === Number(id));
  return (
    <div>
      <ProductDisplay product={product} />
    </div>
  )
}

export default ProductDetail
