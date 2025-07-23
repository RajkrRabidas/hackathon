import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Mainroutes from "./Routes/Mainroutes";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "../src/components/ScrollToTop";

function App() {
  return (
    <>
        <ScrollToTop />
        <Navbar />
        <Mainroutes />
        <Footer />
    </>
  );
}

export default App;
