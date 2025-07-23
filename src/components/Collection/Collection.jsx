import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Collection.css";
import bgVideo from "../../../public/images/bg.mp4";

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
  useEffect(() => {
    gsap.set(".slides", { scale: 6, transformOrigin: "center" });

    // Timeline for scroll-based animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".brand-section",
        start: "top top",
        end: "bottom+=1000",
        pin: true,
        scrub: 2,
      },
    });

    tl.to(
      ".video-div",
      {
        "--clip": "0%",
        ease: "power2",
      },
      "a"
    )
      .to(
        ".slides",
        {
          scale: 1,
          ease: "power2",
        },
        "a"
      )
      .to(
        ".lgt",
        {
          xPercent: -10,
          stagger: 0.03,
          ease: "power4",
        },
        "b"
      )
      .to(
        ".rgt",
        {
          xPercent: 10,
          stagger: 0.03,
          ease: "power4",
        },
        "b"
      );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  

  return (
    <section className="w-full">
      <div theme="black" className="collection brand-section w-full h-screen relative overflow-hidden">
        <div
          style={{ "--clip": "100%" }}
          className="section z-50 video-div w-full h-screen absolute top-0 left-0"
        >
          <video
            src={bgVideo}
            autoPlay
            loop
            muted
            className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
          />
        </div>
        <div className="marquee-container w-full h-screen relative">
          <div className="marquee slides scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
            <div className="row lgt w-full flex items-center gap-6 whitespace-nowrap -translate-x-1/2">
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Vision</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://i.pinimg.com/736x/65/62/a5/6562a55880a29fd2548def67348c550d.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Elegance</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">
                  Performance
                </h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Passion</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">VK Style</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://i.pinimg.com/736x/65/62/a5/6562a55880a29fd2548def67348c550d.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Inspire</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Elegance</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">VK Style</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://i.pinimg.com/736x/65/62/a5/6562a55880a29fd2548def67348c550d.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row rgt w-full flex items-center gap-6 whitespace-nowrap -translate-x-1/3">
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Vision</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Elegance</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">
                  Performance
                </h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">vision</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">puma</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] overflow-hidden rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://e7.pngegg.com/pngimages/670/927/png-clipart-puma-logo-puma-logo-adidas-swoosh-brand-adidas-text-carnivoran-thumbnail.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Inspire</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Elegance</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full"></div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">puma</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://e7.pngegg.com/pngimages/670/927/png-clipart-puma-logo-puma-logo-adidas-swoosh-brand-adidas-text-carnivoran-thumbnail.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row lgt w-full flex items-center gap-6 whitespace-nowrap -translate-x-2/3">
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Vision</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Elegance</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full">
                  <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">
                  Performance
                </h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Passion</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">one8</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://i.tracxn.com/logo/company/one8.com_Logo_fffb1e68-583b-48f5-92ad-d0391908184f.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Inspire</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Elegance</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Vision</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">one8</h1>
              </div>
            </div>
            <div className="row rgt w-full flex items-center gap-6 whitespace-nowrap -translate-x-3/4">
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Vision</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Elegance</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">
                  Performance
                </h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">one8</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://i.tracxn.com/logo/company/one8.com_Logo_fffb1e68-583b-48f5-92ad-d0391908184f.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Inspire</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Passion</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Elegance</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">Vision</h1>
                <div className="img-div w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-end gap-3">
                <h1 className="text-6xl font-semibold lowercase">one8</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
