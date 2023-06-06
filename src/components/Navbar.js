import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./../App.css";

/*
  For Mobile, use "mobile"
*/

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between py-7 mobile:w-10">
      <div className="flex flex-row gap-10 ml-14 mobile:text-sm mobile:gap-4 mobile:ml-2">
        {/* For Logo */}
        <div>
          <span className="text-green-900">Service Connect</span>
        </div>

        {/* For Links */}
        <div className="flex gap-5 mobile:gap-2 mobile:text-sm">
          <NavLink to={"/"} className="hover:text-green-900">
            Home
          </NavLink>
          <NavLink className="hover:text-green-900">Services</NavLink>
          <NavLink className="hover:text-green-900">How it works</NavLink>
          <NavLink className="hover:text-green-900">About</NavLink>
          <NavLink className="hover:text-green-900">Contact</NavLink>
        </div>
      </div>

      {/* For login and signup btns */}
      <div className="flex gap-5 mr-8 mobile:gap-2">
        <button
          className="text-green-900 mobile:text-sm"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="bg-green-900 py-1 px-5 rounded-lg text-white outline-none mobile:text-sm mobile:px-1"
          onClick={() => navigate("/register")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
