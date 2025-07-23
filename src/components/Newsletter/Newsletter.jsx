import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter py-16 font[Montserrat] text-white bg-black">
        <div className="newsbox container px-5 mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl w-[43%] text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4 md:mb-2">
              Subscribe our newsletter
            </h2>
            <p className="text-sm md:text-sm mb-4 md:mb-6">
              Subscribe to our newsletter and be the first to receive insights,
              updates, and expert tips on optimizing your financial management.
            </p>
          </div>
          <form
            action="#"
            method="post"
            className="w-full md:w-auto flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email..."
              className="w-74 md:w-96 p-2 mb-4 md:mb-0 rounded-md text-sm md:text-xl text-gray-700 border focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-lg md:text-lg font-semibold text-black px-4 py-2 md:py-4 rounded-md hover:bg-gray-200 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
