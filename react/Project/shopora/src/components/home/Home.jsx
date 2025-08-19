import React, { useState, useRef } from "react";
import PromoCard from "../PromoCard/PromoCard";
import FeatureSection from "../FeatureSection/FeatureSection";
import FeaturedProductSection from "../FeaturedProductSection/FeaturedProductSection";

const slides = [
  {
    title: "Season Sale",
    subtitle: "WOMEN'S FASHION",
    description: "Up to 70% Off",
    button: "Shop Now",
    image:
      "https://www.realsimple.com/thmb/yla86Nr8GjRXe_9IyADQ638gPrg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fashion-trends-GettyImages-1457816153-d2982e954afe4b42bf5587f087da90d4.jpg",
  },
  {
    title: "Trending Now",
    subtitle: "WOMEN'S COLLECTION",
    description: "Exclusive Deals",
    button: "Explore",
    image:
      "https://cdn.pixabay.com/photo/2025/03/12/09/59/fashion-9464875_1280.jpg",
  },
  {
    title: "Big Offers",
    subtitle: "MEN'S COLLECTION",
    description: "Exclusive Deals",
    button: "Explore",
    image:
      "https://cdn.pixabay.com/photo/2022/09/02/20/03/man-7428290_1280.jpg",
  },
  {
    title: "Trending Now",
    subtitle: "NEW ARRIVALS",
    description: "Fresh Styles for You",
    button: "Order Now",
    image:
      "https://www.shutterstock.com/image-photo/fashion-shot-man-beige-shirt-260nw-2443171017.jpg",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);
  const featuredRef = useRef(null);

  const handleButtonClick = () => {
    featuredRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      {/* Slider */}
      <div className="min-h-[350px] relative overflow-hidden  shadow-lg">
        <div
          className="flex transition-transform duration-700 h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 relative flex items-center justify-center"
            >
              <img
                src={slide.image}
                alt={`Slide ${i}`}
                className="w-full max-h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-start p-6 md:p-12">
                <span className="text-blue-500 text-sm mb-2">
                  {slide.subtitle}
                </span>
                <h2 className="text-white text-2xl md:text-4xl italic font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="text-white mb-4">{slide.description}</p>
                <button
                  onClick={handleButtonClick}
                  className="px-6 py-3 bg-blue-400 border border-white text-white rounded hover:bg-white hover:text-black transition"
                >
                  {slide.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            onClick={prevSlide}
            className=" bg-opacity-40 text-white px-4 py-2 rounded-full hover:bg-opacity-70 transition"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className=" bg-opacity-40 text-white px-4 py-2 rounded-full hover:bg-opacity-70 transition"
          >
            ▶
          </button>
        </div>
      </div>

      {/* E-commerce features */}
      <FeatureSection />

      {/* Promo Cards */}
      <div className="mt-4 bg-gray-50 px-4 md:px-12 py-6 flex flex-col md:flex-row gap-4">
        {/* Left card */}
        <div className="md:w-1/2 min-h-[400px]">
          <PromoCard slide={slides[0]} height="h-104" />
        </div>

        {/* Right card */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {/*Right Top  Cards*/}
          <div className="flex gap-4">
            <div className="w-1/2">
              <PromoCard slide={slides[1]} height="h-50" />
            </div>
            <div className="w-1/2">
              <PromoCard slide={slides[2]} height="h-50" />
            </div>
          </div>

          {/* Right Bottom  */}
          <div>
            <PromoCard slide={slides[3]} height="h-50" />
          </div>
        </div>
      </div>
      <div ref={featuredRef}>
        <FeaturedProductSection />
      </div>
    </div>
  );
};
export default Home;
