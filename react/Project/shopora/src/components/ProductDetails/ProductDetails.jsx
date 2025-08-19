import React, { useState } from 'react';

function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`${quantity} ${product.title} added to cart!`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Product Image */}
      <div className="md:w-1/2">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-auto object-cover rounded-lg mb-4"
        />
      </div>

      {/* Product Info */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-500 mb-2">Brand: {product.brand}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-blue-600 font-semibold text-xl mb-4">${product.price}</p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-4">
            <span className="mr-2">Quantity:</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-16 border rounded px-2 py-1"
            />
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
