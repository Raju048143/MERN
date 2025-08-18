import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaHome,
  FaPhoneAlt,
  FaAddressCard,
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import Logo from "../../assets/ShoporaLogo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const centerNav = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaAddressCard /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  const rightNav = [
    { path: "/profile", icon: <FaUser /> },
    { path: "#", icon: <FaSearch /> },
    { path: "/wishlist", icon: <FaHeart /> },
    { path: "/cart", icon: <FaShoppingCart /> },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Shopora Logo" className="h-10 w-auto rounded" />
        </div>

        {/* Center nav (desktop) */}
        <nav className="hidden sm:flex items-center gap-6">
          {centerNav.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right nav (desktop) */}
        <nav className="hidden sm:flex items-center gap-6">
          {rightNav.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile nav collapse */}
      {isOpen && (
        <nav className="sm:hidden flex flex-col gap-4 p-4 border-t">
          {/* Center nav items */}
          {centerNav.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
            >
              {item.icon}
              {item.name}
            </a>
          ))}

          {/* Right nav items */}
          {rightNav.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
