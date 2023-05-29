import React, { useState } from "react";
import ellipse from "./../assets/ellipse.png";
import ellipse2 from "./../assets/ellipse2.png";
import arrowstwo from "./../assets/arrowstwo.png";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { setServiceProvider, setClient } from "./../features/signupSlice";

const Register = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.signup);
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isServiceProvider, setIsServiceProvider] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formCredentials = {
      firstName,
      lastName,
      email,
      password,
      isClient: store.isClient,
      isServiceProvider: store.isServiceProvider,
    };
    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    console.log("Registration submitted:", formCredentials);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Choose service you want</h2>

            {/* For service provider */}
            <div
              className="flex border-2 border-black rounded cursor-pointer py-7 px-10 justify-evenly"
              onClick={() => {
                dispatch(setServiceProvider(true));
                dispatch(setClient(false));

                nextStep();
              }}
            >
              <img
                src={ellipse}
                alt="ellipse.png"
                style={{
                  width: "40px",
                }}
              />
              <div>
                <h3>Offer services</h3>
                <span>Be a Service Provider and Shine!</span>
              </div>
              <div> </div>
            </div>
            <div className="flex gap-2 justify-center items-center my-5">
              <img src={arrowstwo} alt="arrow.png" />
              <span>Connect</span>
            </div>

            {/* For client */}
            <div
              className="flex border-2 border-black rounded cursor-pointer py-7 px-10 justify-evenly"
              onClick={() => {
                dispatch(setServiceProvider(false));
                dispatch(setClient(true));
                nextStep();
              }}
            >
              <img
                src={ellipse2}
                alt="search.png"
                style={{
                  width: "40px",
                }}
              />
              <div>
                <h3>Discover Services</h3>
                <span>Find the Perfect Services for Your Needs!</span>
              </div>
              <div> </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Personal Information</h2>
            <form className="flex flex-col border-2 border-black rounded-md py-10 px-14">
              <label>First Name:</label>
              <input
                className="border-2 border-black rounded pl-4"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label>Last Name:</label>
              <input
                className="border-2 border-black rounded pl-4"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <div className="flex flex-col gap-3 mt-3">
                <button onClick={prevStep} className="hover:text-green-600">
                  Previous
                </button>
                <button onClick={nextStep} className="hover:text-green-600">
                  Next
                </button>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Account Information</h2>
            <form className="flex flex-col border-2 border-black rounded-md py-10 px-14">
              <label>Email:</label>
              <input
                required
                className="border-2 border-black rounded pl-4"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password:</label>
              <input
                required
                className="border-2 border-black rounded pl-4"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label>Confirm Password:</label>
              <input
                required
                className="border-2 border-black rounded pl-4"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <div className="flex flex-col gap-3 mt-3">
                <button onClick={prevStep} className="hover:text-green-600">
                  Previous
                </button>
                <button
                  className="border-2 border-green-900 rounded bg-green-900 text-white font-bold outline-none p-2 px-3"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-1/2 h-screen justify-center m-auto">
        <h1 className="flex justify-center text-xl font-bold">Signup Page</h1>
        {renderForm()}
      </div>
    </>
  );
};

export default Register;
