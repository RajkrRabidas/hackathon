
import React from 'react';

const ProductDisplay = ({ product }) => {
  if (!product) {
    return <div className="text-red-500 text-xl">Product not found.</div>;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10">
      <div className="w-full">
        <img
          className="w-full h-[35rem] object-cover"
          src={product.image} 
          alt={product.name}
          id="mainImg"
        />
      </div>
      <div className="w-full">
        <h6 className="text-black text-xl opacity-60 pt-10">{product.category}</h6>
        <h2 className="text-4xl py-6">${product.new_price}</h2>
        <select className="my-4 border border-gray-300 rounded px-2 py-1">
          <option>Select size</option>
          <option>XXL</option>
          <option>XL</option>
          <option>Large</option>
          <option>Small</option>
        </select>

        <input type="number" defaultValue={1} min={1} className="border border-gray-300 rounded w-16 ml-1 p-2 mr-2" />
        <button className="buy-btn text-sm bg-orange-400 text-white font-medium mt-3 px-4 py-2 rounded transition-transform transform hover:scale-105">
          Add To Cart
        </button>
        <h4 className="mt-28 my-12 text-4xl">Product details</h4>
        <span className="products-text text-zinc-600">
          {product.description || "No description available."}
        </span>
      </div>
    </div>
  );
};

export default ProductDisplay;
