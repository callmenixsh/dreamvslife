import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/dvlico.png";
import { FaBars } from "react-icons/fa";
import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <>
      {/* Navbar Content */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-full justify-center z-10 drop-shadow 2xl:w-[1400px]">
          <div className="flex w-full">
            <div className="flex w-full justify-around items-center ">
              <Link to="/" className="flex flex-col justify-center items-center">
                <img className="size-14 sm:size-20 md:size-50" src={Logo} alt="Logo" />
                <label className="uppercase text-white font-bold md:text-2xl">Dreamvslife</label>
              </Link>

              <nav className="relative">
                {/* Navbar Links */}
                <ul className="navigations flex gap-5 hidden lg:flex font-[400] text-xl text-white uppercase">
                  <li className="hover:border-b">
                    <Link to="/">Home</Link>
                  </li>

                  {/* All Blogs with Dropdown */}
                  <li className="relative">
                    <div
                      className="flex items-center cursor-pointer hover:border-b"
                      onClick={toggleDropdown}
                    >
                      All Blogs
                    </div>
                    {/* Dropdown Menu */}
                    {(isDropdownOpen || window.innerWidth < 1024) && ( // Show on mobile or if open
                      <ul className="absolute top-full left-0 bg-white text-black rounded shadow-md w-64 p-3">
                        <li className="hover:bg-black/30 p-3">
                          <Link to="/blogs/mental-health">Mental Health</Link>
                        </li>
                        <li className="hover:bg-black/30 p-3">
                          <Link to="/blogs/psychology">Psychology</Link>
                        </li>
                        <li className="hover:bg-black/30 p-3">
                          <Link to="/blogs/lifestyle">Lifestyle</Link>
                        </li>
                        <li className="hover:bg-black/30 p-3">
                          <Link to="/blogs/career-dev">Career Development</Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="hover:border-b">
                    <Link to="/Author">Author</Link>
                  </li>
                  <li className="hover:border-b">
                    <Link to="/Contact">IDKMAN</Link>
                  </li>
                </ul>

                {/* Sidebar Toggle for Mobile */}
                <div className="sidebar lg:hidden" onClick={toggleSidebar}>
                  <FaBars className="w-8 h-6 cursor-pointer text-white" />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
