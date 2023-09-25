import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="px-10  pb-8">
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-[#242424]">
        <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <NavLink to="/" className="hover:underline">
            Team Techप्रेक्षा
          </NavLink>
          . All Rights Reserved.
        </div>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-800 dark:text-gray-400 sm:mt-0">
          <NavLink to="/about" className="mr-4 hover:underline md:mr-6 ">
            <li>About</li>
          </NavLink>

          <NavLink to="/privacy" className="mr-4 hover:underline md:mr-6">
            <li>Privacy Policy</li>
          </NavLink>

          
            <NavLink to="/licensing" className="mr-4 hover:underline md:mr-6">
             <li> Licensing</li>
            </NavLink>
          
         
            <NavLink to="/contact" className="hover:underline">
             <li> Contact</li>
            </NavLink>
          
        </ul>
      </footer>
    </div>
  );
}
