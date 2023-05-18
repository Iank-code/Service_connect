import React from "react";
import "./../App.css";
// import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row justify-between py-7">
      <div className="flex flex-row gap-10 ml-14">
        {/* For Logo */}
        <div>
          <span className="text-green-900">
            Service Connect
          </span>
        </div>

        {/* For Links */}
        <div className="flex gap-5">
          <a className="hover:text-green-900">Services</a>
          <a className="hover:text-green-900">How it works</a>
          <a className="hover:text-green-900">About Us</a>
          <a className="hover:text-green-900">Contact Us</a>
        </div>
      </div>

      {/* For login and signup btns */}
      <div className="flex gap-5 mr-8">
        <button className="text-green-900">Login</button>
        <button className="bg-green-900 py-1 px-5 rounded-lg text-white outline-none">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
