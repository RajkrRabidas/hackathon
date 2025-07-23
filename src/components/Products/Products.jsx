import React, { useContext } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/context";

const Products = () => {
  const { all_products } = useContext(ShopContext);
  const productsToShow = all_products.slice(0, 4);

  return (
    <div>
      <section className="px-6 w-full h-full py-12 bg-[#f5f5f5]">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold tracking-widest">
            NEW ITEMS<span className="border-b-4 border-black ml-2"></span>
          </h2>
          <Link
            to="/products"
            className="border border-black rounded-full px-4 py-1 text-sm hover:bg-black hover:text-white transition"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productsToShow.map((item, index) => (
            <div
              key={item.id || index}
              className="item-box relative bg-[#dedede] p-4 rounded cursor-pointer"
            >
              {/* Product Image */}
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
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
                  10{item.id} {item.name}
                </p>
                <p className="text-xs text-gray-600">{item.gsm}</p>
                <p className="text-sm">
                  <span className="line-through text-gray-400 mr-2">
                    ${item.old_price}
                  </span>
                  <span className="text-black">${item.new_price}</span>
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
      </section>
    </div>
  );
};

export default Products;
