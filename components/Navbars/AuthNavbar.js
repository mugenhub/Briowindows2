import React from "react";
import Link from "next/link";
// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white navbar-expand-lg">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="inline-block py-2 mr-4 text-lg font-bold leading-relaxed text-gray-800 uppercase whitespace-nowrap"
                href="#"
              >
                {/* <Image
                src=''
                
                /> */}
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
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:text-gray-800 lg:hover:text-blueGray-200 text-blueGray-700 lg:py-2"
                  href="/"
                  target=""
                >
                  Home
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:text-gray-800 lg:hover:text-blueGray-200 text-blueGray-700 lg:py-2"
                  href="/about"
                  target="_self"
                >
                  About
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:text-gray-800 lg:hover:text-blueGray-200 text-blueGray-700 lg:py-2"
                  href="/portfolio"
                  target="_self"
                >
                  Portfolio
                </a>
              </li>

             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
