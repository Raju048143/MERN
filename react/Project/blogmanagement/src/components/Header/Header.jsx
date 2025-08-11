import React, { useState } from "react";
import { Container, LogoutButton, Logo } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Post",
      slug: "/my-post",
      active: authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex ml-auto items-center gap-2">
            {navItem.map(
              (item) =>
                item.active && (
                  <li key={item.name} className="py-2">
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li className="py-2">
                <LogoutButton />
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-gray-600 rounded-lg p-4">
            {navItem.map(
              (item) =>
                item.active && (
                  <button
                    key={item.name}
                    onClick={() => {
                      navigate(item.slug);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 rounded hover:bg-blue-100"
                  >
                    {item.name}
                  </button>
                )
            )}
            {authStatus && <LogoutButton />}
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
