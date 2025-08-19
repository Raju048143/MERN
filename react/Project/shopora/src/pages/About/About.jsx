import React from "react";
import aboutImage from "../../assets/ShoporaLogo.png";
function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        About <span className="text-blue-600">Shopora</span>
      </h1>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="About Shopora"
            className="rounded-2xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Shopora is your one-stop online shopping destination for quality
            products at unbeatable prices. From fashion and lifestyle to
            electronics and home essentials, we bring a wide range of products
            to meet your everyday needs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded with the vision of making online shopping simple, reliable,
            and affordable, Shopora is committed to delivering the best shopping
            experience. We focus on **customer satisfaction**, fast delivery, and
            secure payments.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to connect people with products they love, while
            ensuring trust, transparency, and top-notch service. With Shopora,
            you shop smart, safe, and stylish.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              Customer First
            </h3>
            <p className="text-gray-600 text-sm">
              We put our customers at the heart of everything we do, ensuring
              convenience and satisfaction.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              Quality Products
            </h3>
            <p className="text-gray-600 text-sm">
              Every product is carefully curated and quality-checked for a
              seamless shopping experience.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              Secure & Fast
            </h3>
            <p className="text-gray-600 text-sm">
              We ensure safe transactions and quick deliveries right to your
              doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

