import React from 'react'

function Product() {
  return (
    <div className={`relative w-full  rounded-lg overflow-hidden shadow-lg`}>
      <img src=""  className="w-full h-full object-cover" />
      <div className="absolute inset-0  bg-opacity-20 flex flex-col justify-center items-start p-6">
        <span className="text-blue-500 text-sm mb-1">Title</span>
        <h2 className="text-white text-2xl font-bold mb-2">Price</h2>
        <p className="text-white mb-4">Category</p>
        <button className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition">
          Buy now
        </button>
      </div>
    </div>
  )
}

export default Product