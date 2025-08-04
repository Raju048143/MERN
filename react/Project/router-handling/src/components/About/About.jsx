import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="./src/image/table.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            At Radoms Digital Pvt Ltd, we transform complex challenges into seamless digital opportunities. As a forward-thinking software solutions provider, we partner with businesses to develop custom software that drives growth, efficiency, and innovation. Whether it's crafting user-friendly mobile apps, building robust eCommerce platforms, or leveraging AI for smarter business solutions, we deliver results that make an impact.

                        </p>
                        <p className="mt-4 text-gray-600">
                            At Radoms Digital Pvt Ltd, we transform complex challenges into seamless digital opportunities. As a forward-thinking software solutions provider, we partner with businesses to develop custom software that drives growth, efficiency, and innovation. Whether it's crafting user-friendly mobile apps, building robust eCommerce platforms, or leveraging AI for smarter business solutions, we deliver results that make an impact.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}