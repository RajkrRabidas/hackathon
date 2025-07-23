import React, { useContext } from 'react'
import { ShopContext } from '../Context/context'
import './css/HdProducts.css' // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom'

const HdProducts = () => {

  const {all_products} = useContext(ShopContext)

  return (
    <div className='product-grid px-6 py-12 bg-[#f5f5f5]'>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {all_products.map((product, index) => (
            <div key={index} className="item-box relative border border-gray-300 p-4 rounded cursor-pointer">
              {/* Product Image */}
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="item-img w-full h-[300px] object-contain mx-auto hover:scale-105"
                />
              </Link>
              {/* Discount Badge */}
              <span className="absolute top-4 right-4 bg-[#7B674B] text-white text-xs px-2 py-1 rounded-md">
                10% OFF
              </span>

              {/* Product Info */}
              <div className="mt-4 space-y-1">
                <p className="text-xs font-mono tracking-widest">
                  10{product.id} {product.name}
                </p>
                <p className="text-xs text-gray-600">{product.gsm}</p>
                <p className="text-sm">
                  <span className="line-through text-gray-400 mr-2">
                    ${product.old_price}
                  </span>
                  <span className="text-black">${product.new_price}</span>
                </p>
              </div>

              {/* Color Swatches */}
              <div className="mt-3 flex gap-2">
                <div className="w-4 h-4 rounded border border-black bg-black"></div>
                <div className="w-4 h-4 rounded border border-black bg-white"></div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default HdProducts
