import React, { useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

function ProductImage({ src, alt, product, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Clickable Thumbnail */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-48 object-cover rounded-md mb-4 cursor-pointer ${className}`}
        onClick={handleOpen}
      />

      {/* Product Details Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-2xl w-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mb-4 text-gray-500 hover:text-black float-right"
              onClick={handleClose}
            >
              ✕
            </button>
            <ProductDetails product={product} />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductImage;
