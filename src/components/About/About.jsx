import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Image reveal from left
    gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
      },
    });
    // Text reveal from right
    gsap.from(textRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-white text-gray-900 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About <span className="text-[#5B3428]">Virat Kohli</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <img
            ref={imageRef}
            src="https://i.pinimg.com/736x/e1/8e/33/e18e33bbf9a3103a7e0fe760ce384063.jpg"
            alt="Virat Kohli"
            className="rounded-3xl shadow-lg w-full"
          />

          {/* Text Content */}
          <div className='w-full h-full flex flex-col justify-start pt-10' ref={textRef}>
            <h3 className="text-2xl font-semibold mb-4">
              The Journey of a Legend
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Virat Kohli is more than just a cricketer — he is an icon of discipline,
              dedication, and dominance. His journey from the cricket fields of Delhi to
              becoming the captain of the Indian National Team reflects his relentless
              commitment to excellence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              With a keen eye for fashion and fitness, Virat blends performance with
              personality. This platform brings you his curated collection — each piece
              inspired by his lifestyle, spirit, and charisma.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Join the VK movement. Elevate your everyday with the style of a champion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
