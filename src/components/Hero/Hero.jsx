import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "./Hero.css";
import bg2 from "../../../public/images/virat-hero.png";
import bg1 from "../../../public/images/virat-hero2.png";

const slides = [
  {
    image: bg2,
    bgColor: "#fdf2e9",
    heading: "Unleash the Champion Within",
    desc: "Inspired by Virat Kohli — where athletic passion meets timeless style Dive into the exclusive collection that redefines modern boldness.",
    btnColor: "bg-orange-600",
  },
  {
    image: bg1,
    bgColor: "#f0f4f8",
    heading: "Minimalist Comfort",
    desc: "Elevate your look with simplicity and superior comfort.",
    btnColor: "bg-blue-600",
  },
];

const Hero = () => {
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // Mouse move and leave handlers
  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const containerWidth = container.offsetWidth;
    const mouseX = e.clientX - container.getBoundingClientRect().left;
    const offset = (mouseX / containerWidth - 0.5) * 40;
    if (imageRef.current) {
      imageRef.current.style.transform = `translateX(${-offset}px)`;
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "translateX(0)";
    }
  };

  // Auto slider every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
      );
    }
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
      );
    }
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, delay: 0.3, ease: "power2.out" }
      );
    }
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: "power2.out" }
      );
    }
  }, [slideIndex]);

  const currentSlide = slides[slideIndex];

  return (
    <div className="navbar-container relative transition-all duration-500 bg-[#fdf2e9]">
      <section className="hero relative h-screen w-full md:px-12 transition-all duration-500">
        <div className="hero-flex flex items-center justify-around h-full gap-8">
          <div className="hero-left-side max-w-[500px]">
            <h1
              ref={headingRef}
              className="text-4xl md:text-6xl font-bold font-montserrat text-gray-900 leading-tight"
              style={{ opacity: 0 }}
            >
              {currentSlide.heading}
            </h1>
            <p
              ref={descRef}
              className="text-gray-600 md:text-lg"
              style={{ opacity: 0 }}
            >
              {currentSlide.desc}
            </p>
            <button
              ref={buttonRef}
              className={`mt-4 text-white bg-[#F18C1E] hover:bg-orange-500 cursor-pointer px-6 py-3 rounded-full shadow-md hover:scale-105 transition duration-300 font-medium`}
              style={{ opacity: 0 }}
            >
              View Catalog
            </button>
          </div>

          <div
            className="hero-right-side relative h-96 md:h-[500px] md:w-[50%]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={imageRef}
              src={currentSlide.image}
              alt="Slide"
              className="transition-transform duration-200 ease-out cursor-pointer w-full h-full object-cover"
              style={{ opacity: 0 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
