import React from "react";

function Footer() {
  return (
    <div className="flex flex-col mt-10 align-center">
      <div className="flex justify-center gap-40 my-10">
        <div className="flex ">
          <h1 className="flex align-center font-bold text-2xl text-green-900">
            Service Connect
          </h1>
        </div>
        <div className="gap-10">
          <h1 className="text-xl font-bold">Company</h1>

          <div className="flex flex-col gap-2">
            <span className="cursor-pointer hover:text-green-600">
              Services
            </span>
            <span className="cursor-pointer hover:text-green-600">
              How it works
            </span>
            <span className="cursor-pointer hover:text-green-600">Why Us</span>
            <span className="cursor-pointer hover:text-green-600">
              Contact Us
            </span>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Lets Talk</h1>

          {/* For Name */}
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name ..."
            className="bg-gray-300 py-2 pl-4 rounded-md placeholder:text-black"
          />

          {/* For Email */}
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email ..."
            className="bg-gray-300 py-2 pl-4 rounded-md placeholder:text-black"
          />

          {/* For Message */}
          <label>Message:</label>
          <textarea
            placeholder="Enter message s..."
            className="bg-gray-300 py-2 pl-4 rounded-md placeholder:text-black"
          ></textarea>

          <button type="submit" className="bg-green-900 text-white rounded-md py-2 text-xl">Send</button>
        </form>
      </div>

      <div className="flex justify-center gap-40 mb-10">
        <h1 className="font-bold text-2xl">© copyright 2023</h1>
        <div className="flex gap-5 cursor-pointer">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
