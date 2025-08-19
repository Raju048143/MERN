import React from 'react'
import { FaTruck, FaLock, FaMoneyBillWave, FaHeadset } from "react-icons/fa";
import FeatureCard from '../FeatureCard/FeatureCard';

const features = [
  {
    icon: <FaTruck />,
    title: "Free Shipping",
    desc: "Get free shipping on all orders",
  },
  {
    icon: <FaLock />,
    title: "Secure Payment",
    desc: "100% secure payment",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Money Back Guarantee",
    desc: "100% money back guarantee",
  },
  {
    icon: <FaHeadset />,
    title: "Online Support",
    desc: "24/7 customer support",
  },
];
function FeatureSection() {
return (
     <div className="bg-gray-200 py-6 px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-4">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          desc={feature.desc}
        />
      ))}
    </div>
  );
}

export default FeatureSection