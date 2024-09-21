import React from 'react';

const FeaturesSection = () => {
  const data = {
    title: "Tons of Features",
    features: [
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-40.png",
        text: "5 Stars\nSupport"
      },
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-41.png",
        text: "SEO\nOptimized"
      },
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-42.png",
        text: "Extensive\nDocumentation"
      },
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-43.png",
        text: "Lifetime\nUpdates"
      },
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-44.png",
        text: "Fully\nResponsive"
      },
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-45.png",
        text: "UI/UX\nDesign"
      },
      {
        imgSrc: "https://wgl-dsites.net/bili/wp-content/uploads/2023/03/landing-46.png",
        text: "No Coding\nNeeded"
      },
    ]
  };

  return (
    <div className="py-12">
      <section className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold">{data.title}</h2>
      </section>

      <section className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
        {data.features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-500 to-blue-300 p-4 rounded-lg flex flex-col items-center"
            style={{
              marginTop: index % 2 === 1 ? '40px' : '0px', // 40px for odd indices
              marginBottom: index % 2 === 0 ? '-40px' : '0px' // -40px for even indices
            }}
          >
            <img
              loading="lazy"
              decoding="async"
              width="80"
              height="80"
              src={feature.imgSrc}
              alt=""
              className="mb-4"
            />
            <p className="text-center">
              {feature.text.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FeaturesSection;