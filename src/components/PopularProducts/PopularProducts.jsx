import { useEffect, useState } from "react";
import React from "react";
import "./PopularProducts.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import propular_products from "../../../public/images/Popular_products";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
import { useContext } from "react";
import { ShopContext } from "../../Context/context";

const PopularProducts = () => {
  const [centerIndex, setCenterIndex] = useState(2);
  const { all_products } = useContext(ShopContext);
  const popularProducts = propular_products.map(popular => {
    return all_products.find(p => p.id === popular.id) || popular;
  });

  useEffect(() => {
    gsap.utils.toArray(".popular-products").forEach((card) => {
      gsap.fromTo(
        card,
        { scale: 0.8, opacity: 1 },
        { 
          width: "100%",
          height: "100%",
          borderRadius: "0",
          margin: "0",
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "bottom 85%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
          duration: 1,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <section className="popular-products w-full bg-black text-white py-10 px-4 md:px-20 overflow-hidden">
      <h2 className="md:text-7xl text-center font-bold pb-15 tracking-tight">
        POPULAR PRODUCTS
      </h2>

      <div className="relative flex items-center justify-center pb-15">
        <div className="flex gap-6 transition-transform duration-500 ease-in-out">
          {popularProducts.map((Pproduct, idx) => {
            const isCenter = idx === centerIndex;
            const offset = idx - centerIndex;
            if (!Pproduct || !Pproduct.id || !Pproduct.image) return null;
            return (
              <div
                key={Pproduct.id}
                className={`popular-card relative w-56 md:w-64 h-[450px] shrink-0 rounded-2xl overflow-hidden shadow-md transition-all duration-500 transform
              ${isCenter ? "scale-110 z-20" : "scale-90 z-10"} 
              ${offset === -1 ? "-rotate-6" : offset === 1 ? "rotate-6" : ""}
              `}
              >
                <Link to={`/products/${Pproduct.id}`}><img
                  src={Pproduct.image}
                  alt={Pproduct.name}
                  className="w-full h-full object-cover"
                /></Link>
                <div className="absolute bottom-4 left-4 text-white text-md font-medium">
                  {Pproduct.name}
                </div>
                {Pproduct.tag && (
                  <div className="absolute top-3 left-3 bg-white text-black px-2 py-1 text-sm rounded-md">
                    {Pproduct.tag}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;