import React from "react";
import Link from "next/link";
// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="inline-block py-2 mr-4 text-lg font-bold leading-relaxed text-white uppercase whitespace-nowrap"
                href="#"
              >
                BrioWindows
              </a>
            </Link>
            
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
             
              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 lg:py-2"
                  href="/"
                  target="_blank"
                >
                  Home
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 lg:py-2"
                  href="/about"
                  target="_blank"
                >
                  About
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 lg:py-2"
                  href="/portfolio"
                  target="_blank"
                >
                  Portfolio
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className="px-4 py-2 mb-3 ml-3 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none text-blueGray-700 active:bg-blueGray-50 hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0"
                  type="button"
                >
                  <i className=""></i> Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
