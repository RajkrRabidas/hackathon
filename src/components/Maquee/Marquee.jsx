import React, { useEffect } from "react";
import gsap from "gsap";
import arrow from "../../../public/images/arrow-br.svg";

const Marquee = () => {
  
  useEffect(() => {
    function handleWheel(dets) {
      if (dets.deltaY > 0) {
        gsap.to(".marquee-hero", {
          x: "-100%",
          repeat: -1,
          duration: 4,
          ease: "none"
        });
        gsap.to(".marquee-hero img", {
          rotate: 180
        });
      } else {
        gsap.to(".marquee-hero", {
          x: "0%",
          repeat: -1,
          duration: 4,
          ease: "none"
        });
        gsap.to(".marquee-hero img", {
          rotate: 0
        });
      }
    }
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="w-full move flex flex-row overflow-hidden">
      <div className="marquee-hero w-full flex items-center gap-6 whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="elem flex items-end gap-3" key={i}>
            <h1 className="text-6xl font-semibold lowercase">Virat Kohli’s Exclusive Style Drop | Be Bold. Be Fearless. | Shop Now</h1>
            <div className="img-div w-[4.5rem] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={arrow}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
