import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './OfferSection.css';

const OfferSection = () => {
  const sectionRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hrs: 0, mins: 0, secs: 0 });

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    const endDate = new Date('2025-12-18T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / 1000 / 60) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hrs, mins, secs });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={sectionRef} className="flex font-montserrat flex-col h-full lg:flex-row items-center justify-between px-8 py-16 bg-[#D1D1D3]">
      {/* Left Content */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <h2 className="heading text-6xl font-bold mb-4">Act Fast! Incredible Offers Expire Soon</h2>
        <p className="text-gray-600 mb-6">
          Nam curse augue diam ac curabitur nisi donec efficitur conubia fringilla ipsum viverra placerat.
        </p>

        {/* Timer */}
        <div className="timmer flex justify-center items-center lg:justify-start gap-15 text-center font-semibold text-xl mb-6">
          <div>
            <p className='text-6xl'>{timeLeft.days}</p>
            <span className="text-lg text-gray-500">Days</span>
          </div>
          <div>
            <p className='text-6xl'>{timeLeft.hrs.toString().padStart(2, '0')}</p>
            <span className="text-lg text-gray-500">Hrs</span>
          </div>
          <div>
            <p className='text-6xl'>{timeLeft.mins.toString().padStart(2, '0')}</p>
            <span className="text-lg text-gray-500">Mins</span>
          </div>
          <div>
            <p className='text-6xl'>{timeLeft.secs.toString().padStart(2, '0')}</p>
            <span className="text-lg text-gray-500">Secs</span>
          </div>
        </div>

        <p className="text-sm text-gray-700 mb-4">
          Limited time offer. The deal expires on <strong>December 18, 2025</strong>. <span className="text-[#313131] font-bold">HURRY UP!</span>
        </p>

        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition mt-10">
          VIEW COLLECTION
        </button>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img src="https://img.freepik.com/premium-photo/handsome-young-businessman-with-bristles-glasses-fashionable-outfit-clothes-with-shirt-blazer-stands-near-gray-background-casual-male-style-fashion_338491-11525.jpg" alt="Offer Model" className="w-[300px] lg:w-[400px] object-cover" />
      </div>
    </div>
  );
};

export default OfferSection;
