import React, { useState } from "react";
// importing css files
import "./../../App.css";
import "./../servicePage/services.css";

// Importing calender
import Calendar from "react-calendar";

// Importing images
import house from "./../../assets/house.png";
import bathtab from "./../../assets/bathtab.png";
import checkMark from "./../../assets/checkMark.png";

function ServiceDetail() {
  const [value, onChange] = useState(new Date());
  if(value) console.log(value)

  return (
    <div className="h-screen">
      {/* For service the provider is offering */}
      <div className="service-bar">
        <div className="service-first">
          <div className="service-first-shared">
            <img src={house} alt="house.png" />
            <div className="flex flex-row gap-2 items-baseline">
              <p>House Cleaning service</p>
              <div className="flex flex-2 gap-1">
                <img src={checkMark} alt="checkMark.png" className="w-5 h-5" />
                <span className="text-sm">verified</span>
              </div>
            </div>
          </div>
          <div className="service-first-shared">
            <img src={house} alt="house.png" />
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2 items-baseline">
                <p>Ruto Odinga</p>
                <span>will serve you</span>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-2 gap-1">
                  <img
                    src={checkMark}
                    alt="checkMark.png"
                    className="w-5 h-5"
                  />
                  <span className="text-sm">verified</span>
                </div>
                {"|"}
                <span>10 years</span>
              </div>
            </div>
          </div>
        </div>
        <div className="service-warning">
          <h4 className="service-warning-header">
            Please Note <span className="text-orange-700">*</span>
          </h4>
          <span className="">
            For your safety never transfer money or communicate outside of
            service connect
          </span>
          <button className="service-warning-btn">Message provider</button>
        </div>
      </div>

      <div className="select-container">
        <h1 className="font-bold text-2xl">Select Service</h1>
        <div className="select">
          {/* All services being offered by service provider */}
          <div>
            {/* For service information */}
            <div>
              <img src={bathtab} alt="bathtab.png" />
              <span className="font-bold text-lg my-6">Bathroom cleaning</span>
            </div>
            {/* For price */}
            <span>Ksh. 200</span>
          </div>

          <div>
            {/* For service information */}
            <div>
              <img src={bathtab} alt="bathtab.png" />
              <span className="font-bold text-lg">Bathroom cleaning</span>
            </div>
            {/* For price */}
            <span>Ksh. 200</span>
          </div>

          <div>
            {/* For service information */}
            <div>
              <img src={bathtab} alt="bathtab.png" />
              <span className="font-bold text-lg">Bathroom cleaning</span>
            </div>
            {/* For price */}
            <span>Ksh. 200</span>
          </div>

          <div>
            {/* For service information */}
            <div>
              <img src={bathtab} alt="bathtab.png" />
              <span className="font-bold text-lg">Bathroom cleaning</span>
            </div>
            {/* For price */}
            <span>Ksh. 200</span>
          </div>

          <div>
            {/* For service information */}
            <div>
              <img src={bathtab} alt="bathtab.png" />
              <span className="font-bold text-lg">Bathroom cleaning</span>
            </div>
            {/* For price */}
            <span>Ksh. 200</span>
          </div>

          <div>
            {/* For service information */}
            <div>
              <img src={bathtab} alt="bathtab.png" />
              <span>Bathroom cleaning</span>
            </div>
            {/* For price */}
            <span>Ksh. 200</span>
          </div>
        </div>
      </div>

      <div className="flex py-10 justify-center items-center">
        {/* For calender */}
        <div className='w-96'>
          <Calendar onChange={onChange} value={value} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ServiceDetail;
