import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col justify-between">
            <div className="mb-4 inline-flex items-center justify-center sm:justify-start">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-center sm:text-left text-gray-600">
              &copy; Copyright 2025. All Rights Reserved by Radoms.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-500">
              Company
            </h3>
            <ul className="space-y-3 text-center sm:text-left">
              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-500">
              Support
            </h3>
            <ul className="space-y-3 text-center sm:text-left">
              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-500">
              Legals
            </h3>
            <ul className="space-y-3 text-center sm:text-left">
              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
