import React from 'react';

function PromoCard({ slide, height = "h-64" }) {
  return (
    <div className={`relative w-full ${height} rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer`}>
      {/* Background Image */}
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-start p-6 transition-all duration-500 hover:bg-opacity-40">
        <span className="text-blue-500 text-sm mb-1 transition duration-500 hover:translate-y-1">
          {slide.subtitle}
        </span>
        <h2 className="text-white text-2xl font-bold mb-2 transition duration-500 hover:translate-y-1">
          {slide.title}
        </h2>
        <p className="text-white mb-4 transition duration-500 hover:translate-y-1">
          {slide.description}
        </p>
        <button className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition">
          {slide.button}
        </button>
      </div>
    </div>
  );
}

export default PromoCard;
