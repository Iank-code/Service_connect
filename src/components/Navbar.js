import React from "react";
import "./../App.css";
// import { NavLink } from "react-router-dom";

/*
  For Mobile, use "mobile"
*/

function Navbar() {
  return (
    <div className="flex flex-row justify-between py-7 mobile:w-10">
      <div className="flex flex-row gap-10 ml-14 mobile:text-sm mobile:gap-4 mobile:ml-2">
        {/* For Logo */}
        <div>
          <span className="text-green-900">Service Connect</span>
        </div>

        {/* For Links */}
        <div className="flex gap-5 mobile:gap-2 mobile:text-sm">
          <a className="hover:text-green-900">Services</a>
          <a className="hover:text-green-900">How it works</a>
          <a className="hover:text-green-900">About</a>
          <a className="hover:text-green-900">Contact</a>
        </div>
      </div>

      {/* For login and signup btns */}
      <div className="flex gap-5 mr-8 mobile:gap-2">
        <button className="text-green-900 mobile:text-sm">Login</button>
        <button className="bg-green-900 py-1 px-5 rounded-lg text-white outline-none mobile:text-sm mobile:px-1">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
