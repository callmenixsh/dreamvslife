import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">DreamVsLife</h2>
          <p className="text-sm">
            Join the journey of knowledge, self-care, and career exploration.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/author" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Blog Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/blogs/mental-health" className="hover:underline">
                Mental Health
              </Link>
            </li>
            <li>
              <Link to="/blogs/psychology" className="hover:underline">
                Psychology
              </Link>
            </li>
            <li>
              <Link to="/blogs/lifestyle" className="hover:underline">
                Lifestyle
              </Link>
            </li>
            <li>
              <Link to="/blogs/career-dev" className="hover:underline">
                Career Development
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} DreamVsLife. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
