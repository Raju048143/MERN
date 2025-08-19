import React, { useEffect, useState } from "react";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";

function FeaturedProductSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("mens-shoes"); 

  useEffect(() => {
    setLoading(true);
    const url =
      category === "all"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetching error:", err);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p className="text-center">Loading featured products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
  <div className="bg-gray-200 py-6 px-4 md:px-12 mt-4">
  <h1 className="text-2xl font-bold text-center mb-6">Featured Products</h1>

  {/* Category Buttons */}
  <div className="flex justify-center gap-3 mb-6 flex-wrap">
    {[
      { label: "All", value: "all" },
      { label: "Mens Shirts", value: "mens-shirts" },
      { label: "Womens Bags", value: "womens-bags" },
      { label: "Vehicle", value: "vehicle" },
    ].map((btn) => (
      <button
        key={btn.value}
        onClick={() => setCategory(btn.value)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition 
          ${
            category === btn.value
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white hover:bg-gray-100"
          }`}
      >
        {btn.label}
      </button>
    ))}
  </div>

  {/* Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {products.map((product) => (
      <FeaturedProduct key={product.id} product={product} />
    ))}
  </div>
</div>

  );
}

export default FeaturedProductSection;
