import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  const toggleCategoryDropdown = () => setCategoryOpen(!isCategoryOpen);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur z-20  overflow-y-auto transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Close Icon */}
      <div className="absolute top-4 right-4">
        <FaTimes
          className="text-white w-6 h-6 cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar Content */}
      <div className="flex flex-col  items-center mt-10 h-full space-y-8 text-white md:text-xl uppercase">
        <Link to="/" onClick={toggleSidebar}>
          Home
        </Link>
        <Link to="/Author" onClick={toggleSidebar}>
          Author
        </Link>
        <Link to="/Contact" onClick={toggleSidebar}>
          Contact
        </Link>

        {/* Categories Dropdown */}
        <div className="w-full max-w-xs">
          <div
            className="flex justify-center gap-2 items-center cursor-pointer border-b-2 pb-2 text-center"
            onClick={toggleCategoryDropdown}
          >
            Blogs
            <FaChevronDown
              className={`transition-transform duration-300 ${
                isCategoryOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          {isCategoryOpen && (
            <ul className="flex flex-col items-center mt-4 space-y-4 pl-2">
              <li>
                <Link to="/blogs/mental-health" onClick={toggleSidebar}>
                  Mental Health
                </Link>
              </li>
              <li>
                <Link to="/blogs/psychology" onClick={toggleSidebar}>
                  Psychology
                </Link>
              </li>
              <li>
                <Link to="/blogs/lifestyle" onClick={toggleSidebar}>
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/blogs/career-dev" onClick={toggleSidebar}>
                  Career Development
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
