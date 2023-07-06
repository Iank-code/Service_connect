import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import SelectedServices from "./SelectedServices";
import ServiceReviews from "./ServiceReviews";
import TimePicker from "./TimePicker";
// importing css files
import "./../../App.css";
import "./services.css";

// Importing calender
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Importing images
import house from "./../../assets/house.png";
import user1 from "./../../assets/user1.png";
import bathtab from "./../../assets/bathtab.png";
import checkMark from "./../../assets/checkMark.png";
import Navbar from "../../components/Navbar";
import serviceBackground from "./../../assets/serviceBackground.png";
import axios from "axios";

function ServiceDetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/services/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((error) => {
        // Handle error state or display error message
        console.error(error);
      });
  }, []);

  const [value, onChange] = useState(new Date());
  if (value) console.log(value);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  return (
    <>
      {/* Navbar */}
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
            <NavLink to={"/home"} className="hover:text-green-900">
              Services
            </NavLink>
            <NavLink className="hover:text-green-900">How it works</NavLink>
            <NavLink className="hover:text-green-900">About</NavLink>
            <NavLink className="hover:text-green-900">Contact</NavLink>
          </div>
        </div>

        {/* For login and signup btns */}
        <div className="flex gap-5 mr-8 mobile:gap-2">
          <button
            className="bg-green-900 py-1 px-5 rounded-lg text-white outline-none mobile:text-sm mobile:px-1"
            onClick={() => navigate("/")}
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="h-screen">
        {/* <img src={serviceBackground} alt="" className="h-screen-img"/> */}
        {/* For service the provider is offering */}

        <div className="select-container">
          <h1 className="font-bold text-2xl">Cleaning Micro-service</h1>
          <div className="select">
            {/* All services being offered by service provider */}
            <div className="subservice-select">
              {/* For service information */}
              <div>
                <img src={bathtab} alt="bathtab.png" />
                <span className="font-bold text-lg my-6">
                  Bathroom cleaning
                </span>
              </div>
              {/* For price */}
              <span>Ksh. 200</span>
            </div>

            <div className="subservice-select">
              {/* For service information */}
              <div>
                <img src={bathtab} alt="bathtab.png" />
                <span className="font-bold text-lg">Bathroom cleaning</span>
              </div>
              {/* For price */}
              <span>Ksh. 200</span>
            </div>

            <div className="subservice-select">
              {/* For service information */}
              <div>
                <img src={bathtab} alt="bathtab.png" />
                <span className="font-bold text-lg">Bathroom cleaning</span>
              </div>
              {/* For price */}
              <span>Ksh. 200</span>
            </div>

            <div className="subservice-select">
              {/* For service information */}
              <div>
                <img src={bathtab} alt="bathtab.png" />
                <span className="font-bold text-lg">Bathroom cleaning</span>
              </div>
              {/* For price */}
              <span>Ksh. 200</span>
            </div>

            <div className="subservice-select">
              {/* For service information */}
              <div>
                <img src={bathtab} alt="bathtab.png" />
                <span className="font-bold text-lg">Bathroom cleaning</span>
              </div>
              {/* For price */}
              <span>Ksh. 200</span>
            </div>

            <div className="subservice-select">
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
        <div className="service-bar">
          <div className="service-first">
            <div className="service-first-shared">
              <img
                src={data?.provider_image}
                alt={`${data?.provider.username}.png`}
                style={{
                  width: "80px",
                }}
              />
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-2 items-baseline">
                  <p>{data?.provider.username}</p>
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
          <div className="service-warn">
            <h4 className="service-warning-header">
              Please Note <span className="text-orange-700">*</span>
            </h4>
            <span className="">
              For your safety never transfer money or communicate outside of
              service connect
            </span>
            <button className="service-warning-btn">Message provider</button>
          </div>
          <div className="service-warning">
            <h4 className="service-warning-header">
              Microservices{" "}
              <span className="super-script text-blue-700">3</span>
            </h4>
            <span className="">
              Date: 12/12/12 <br />
              time: 11:00 - 12:00
            </span>
            <button className="service-warning-btn">Book Service</button>
          </div>
        </div>

        <div className="flex py-14 my-14 gap-14 justify-center items-center">
          {/* For calender and rating section */}
          <div>
            <h2 className="font-bold my-6">
              Choose best Date & Time for cleaning
            </h2>
            <div className="w-96 border-2 rounded-md p-14 box-style">
              <Calendar onChange={setDate} value={date} />
            </div>
          </div>

          <div className="border-2 rounded-md p-14 box-style mt-16">
            <div className="flex flex-col">
              <h2>Select Time</h2>
              <hr
                style={{
                  width: "50%",
                  border: "1px solid black",
                }}
              />
            </div>
            {/* Shows total price, service name and number of reviews */}
            <div className="flex gap-5 my-3">
              {/* For price */}
              {/* <span className="font-bold">Ksh. 500</span> */}
              {/* For service being offered */}
              {/* <span>Home Cleaning</span> */}
              {/* For average star rating */}
              {/* <span> */}
              {/* 4.5 {"*"} {"10 reviews"} */}
              {/* </span> */}
            </div>

            {/* Shows service date and time */}
            {/* <div className="flex gap-4 justify-between mb-3">
            <div>
              <img src="" alt="" />
              <div>
                <h3 className="font-bold">Date</h3>
                <span>5/20/2023</span>
              </div>
            </div>
            <div>
              <div>
                <h3 className="font-bold">Time</h3>
                <span>10.00am</span>
              </div>
            </div>
          </div> */}

            {/* Showing work to the service provider */}
            <div className="border-2 border-black rounded p-6 gap-14 mb-4">
              {/* <div className="flex flex-col">
              <h3 className="font-bold">Services</h3>
              <span>3 selected</span>
            </div> */}

              {/* For each selected service */}
              <div>
                <TimePicker value={time} onChange={setTime} />
                {/* <SelectedServices />
              <SelectedServices /> */}
              </div>
            </div>
            {/* <button className="bg-green-800 text-white rounded outline-none py-1 px-4">
            Book Service
          </button> */}
          </div>
        </div>

        {/* For Reviews */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl">Reviews</h2>
          <div className="ServiceReviews">
            <ServiceReviews />
            <ServiceReviews />
            <ServiceReviews />
            <ServiceReviews />
            <ServiceReviews />
            <ServiceReviews />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
