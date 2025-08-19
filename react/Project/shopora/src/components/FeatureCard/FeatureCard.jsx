import React from 'react'

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center">
      <div className="text-3xl text-blue-500 mb-2">{icon}</div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default FeatureCard