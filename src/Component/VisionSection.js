import React from 'react';

const VisionSection = () => {
  const data = {
    vision: {
      title: "Why Partner with Infinity DesignHub?",
      content: [
        "We envision a world where every brand possesses a distinctive identity that stands out and leaves a lasting impression."
      ],
      buttonText: "GET IN TOUCH",
      buttonLink: "/contact",
      imageSrc: "https://wgl-dsites.net/bili/light/wp-content/uploads/2022/08/home6-1.jpg"
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-12 flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <img
          loading="lazy"
          decoding="async"
          src={data.vision.imageSrc}
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="mb-6">
          <h3 className="text-3xl font-semibold mt-2">{data.vision.title}</h3>
        </div>

        <div className="mb-6">
          {data.vision.content.map((paragraph, idx) => (
            <p className='text-[18px] leading-[36px]' key={idx}>{paragraph}</p>
          ))}
        </div>

        <a
          href={data.vision.buttonLink}
          className="no-underline text-gray-600 wgl-button relative px-8 py-3 z-1 font-semibold rounded-full  transition-all duration-300"
        >
          {data.vision.buttonText}
        </a>
      </div>
    </section>
  );
};

export default VisionSection;
