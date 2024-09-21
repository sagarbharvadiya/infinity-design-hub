import React, { useState, useEffect } from "react";
import bannerData from "../Data/bannerData.json"; // Adjust the path if necessary

const BannerSection = () => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
        setTransitioning(false);
      }, 500); // Duration of the transition
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentData = bannerData[index];

  return (
    <section className="banner relative">
      <div className="container flex flex-col md:flex-row items-center text-start py-10 md:py-28">
        <div className="flex-1">
          <div
            className={`space-y-6 transition-opacity duration-500 ${
              transitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
              {currentData.mainText[0]}
            </h1>
            <div className="flex items-center justify-center">
              <img
                src="https://wgl-dsites.net/bili/light/wp-content/uploads/2022/03/arrow_orange.png"
                alt="arrow"
                className="w-8 h-12 md:w-10 md:h-16 lg:w-15 lg:h-20 mr-3"
              />
              <h2 className="heading-title text-3xl md:text-5xl lg:text-7xl font-bold text-gray-600">
                {currentData.mainText[1]}
              </h2>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
              {currentData.mainText[2]}
            </h1>
          </div>

          <div
            className={`flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-4 mt-6 md:mt-10 transition-opacity duration-500 ${
              transitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="w-full md:w-[400px] text-base md:text-lg lg:text-[20px] leading-[28px] md:leading-[36px] text-gray-600 dm-sans">
              {currentData.subheading}
            </p>
            <a
              href="#contact"
              className="no-underline text-gray-600 wgl-button relative px-6 md:px-8 py-2 md:py-3 z-1 font-semibold rounded-full transition-all duration-300"
            >
              {currentData.buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Social Media (Sidebar-like styling) */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-10 text-gray-600 text-xs md:text-sm lg:text-base">
        <div className="rotate-90 transform-origin-left">FACEBOOK</div>
        <div className="rotate-90 transform-origin-left">TWITTER</div>
        <div className="rotate-90 transform-origin-left">INSTAGRAM</div>
      </div>
    </section>
  );
};

export default BannerSection;
