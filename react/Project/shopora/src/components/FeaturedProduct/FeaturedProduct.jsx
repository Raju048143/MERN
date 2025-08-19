import React from "react";
import ProductImage from "../ProductImage/ProductImage";

function FeaturedProduct({ product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 max-w-xs transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <ProductImage
        src={product.thumbnail}
        alt={product.title}
        product={product}
      />
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="text-gray-500 text-sm mb-1">Brand: {product.brand}</p>
      <p className="text-blue-600 font-semibold text-lg">${product.price}</p>
    </div>
  );
}

export default FeaturedProduct;
