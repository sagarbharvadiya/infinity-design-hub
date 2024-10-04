import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

const WhyUs = ({ wData }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  // Handle case where wData is not provided
  if (!wData) {
    return <p>No data available.</p>;
  }

  return (
    <section className="container container-lg mx-auto py-16">
      <div className="row flex-wrap">
        <div className="col-md-6" data-aos="fade-right">
          <img
            loading="lazy"
            decoding="async"
            src={wData.imageSrc}
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <div className="mb-6 px-2 mt-4">
            <span className="text-[#ec008c] text-[14px] uppercase font-bold">{wData.subtitle}</span>
            <h3 className="text-4xl font-bold mt-3 mb-3 text-[#232323]">{wData.title}</h3>
          </div>
          <p className="mb-6 p-3 text-[16px] leading-[29px]">{wData.description}</p>
          <Link
            to={wData.buttonLink} className="inline-block text-black wgl-button relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300 mt-6"
          >
            {wData.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
