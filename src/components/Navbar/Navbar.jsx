import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";


const slides = [
  {
    bgColor: "#fdf2e9",
    btnColor: "bg-orange-600",
  },
  {
    bgColor: "#f0f4f8",
    btnColor: "bg-blue-600",
  },
];

const Navbar = () => {
  const sidebarRef = useRef(null);
  const headerRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar open/close animation
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (sidebarOpen) {
      sidebar.classList.remove("hidden");
      gsap.fromTo(sidebar, { x: "100%" }, { x: 0, duration: 0.5 });
    } else {
      gsap.to(sidebar, {
        x: "100%",
        duration: 0.5,
        onComplete: () => {
          sidebar.classList.add("hidden");
        },
      });
    }
  }, [sidebarOpen]);

      // Auto slider every 2s
      useEffect(() => {
        const interval = setInterval(() => {
          setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        const handleScroll = () => {
          if (headerRef.current) {
            if (window.scrollY > 10) {
              headerRef.current.classList.add('header-blur');
            } else {
              headerRef.current.classList.remove('header-blur');
            }
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  const currentSlide = slides[slideIndex];

  return (
    <div className="navbar-container relative transition-all duration-500 bg-[#fdf2e9]">
      <header ref={headerRef} className="flex justify-between items-center p-6">
        <Link to={"/"} className="text-center leading-none">
          <h1 className="logo font-bold text-black">VK</h1>
          <p className="sub text-gray-600 uppercase">Lifestyle</p>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/cart" className="block transition">
            <i className="ri-shopping-bag-4-line text-xl cursor-pointer"></i>
          </Link>
          <Link to="/login" className="block transition">
            <i className="ri-user-line text-xl cursor-pointer"></i>
          </Link>
          <i
            className="ri-menu-3-line text-xl cursor-pointer"
            id="openSidebar"
            onClick={() => setSidebarOpen(true)}
          ></i>
        </div>
      </header>

      <aside
        ref={sidebarRef}
        id="sidebar"
        className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 hidden flex-col justify-between p-10"
      >
        <nav className="navbar">
          <i
            className="ri-close-line text-xl cursor-pointer"
            id="closeSidebar"
            onClick={() => setSidebarOpen(false)}
          ></i>
          <Link to="/" className="block transition" onClick={() => setSidebarOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block transition" onClick={() => setSidebarOpen(false)}>
            About
          </Link>
          <Link to="/products" className="block transition" onClick={() => setSidebarOpen(false)}>
            Products
          </Link>
          <Link to="/contact" className="block transition" onClick={() => setSidebarOpen(false)}>
            Contact
          </Link>
          <Link to="/explore-plan" className="block transition" onClick={() => setSidebarOpen(false)}>
            Explore Plan
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;
