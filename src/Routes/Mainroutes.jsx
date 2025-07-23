
import React from "react";
import {Routes, Route } from "react-router-dom";
import HdProducts from "../Pages/HdProducts";
import ProductDetail from "../Pages/ProductDetail";
import Cart from "../Pages/Cart";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import About from "../components/About/About";


const Mainroutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<HdProducts />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
  );
};

export default Mainroutes;
