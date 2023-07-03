import React, { useState } from "react";
import "./auth.css";

import ellipse from "./../assets/ellipse.png";
import ellipse2 from "./../assets/ellipse2.png";
import arrowstwo from "./../assets/arrowstwo.png"; 
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { setRole, setPath } from "./../features/signupSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.signup);
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file");
    }
    console.log(selectedFile);
    // path: store.path,
    // role: store.role,

    const formItem = new FormData();

    formItem.append("username", userName);
    formItem.append("email", email);
    formItem.append("password", password);
    formItem.append("password_confirmation", confirmPassword);
    formItem.append("address", "232323");
    formItem.append("phone_number", "123");
    formItem.append("role", store.role);
    formItem.append("file", selectedFile);
    fetch(`${store.path}`, {
      method: "POST",
      body: formItem,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data.token) {
          navigate("/home");
        }
        console.log(data.data)
        localStorage.setItem("route", data.data.route);
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("image", data.data.image);
        localStorage.setItem("id", data.data.user.id);
        localStorage.setItem("name", data.data.user.username);
      })
      .catch((error) => {
        console.error("Upload failed:", error);
      });
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
                dispatch(setRole("service provider"));
                dispatch(
                  setPath("http://127.0.0.1:3000/service_provider/register")
                );

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
                dispatch(setRole("customer"));
                dispatch(setPath("http://127.0.0.1:3000/customer/register"));
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
            <h2>Step 2: Account Information</h2>
            <form className="flex flex-col border-2 border-black rounded-md py-10 px-14">
              <label>Username:</label>
              <input
                required
                className="border-2 border-black rounded pl-4"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

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

              <input
                type="file"
                accept="image/*"
                // name="image"
                id="file-input"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setSelectedFile(e.target.files[0]);
                }}
              />

              <div className="flex flex-col gap-3 mt-14">
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
