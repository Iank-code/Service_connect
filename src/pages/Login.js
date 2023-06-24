import React, { useState } from "react";
import { notifications } from "@mantine/notifications";
import { IconX, IconCheck } from "@tabler/icons-react";

import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "../features/signupSlice";

import ellipse from "./../assets/ellipse.png";
import ellipse2 from "./../assets/ellipse2.png";
import arrowstwo from "./../assets/arrowstwo.png";


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.signup);

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const loginForm = (e) => {
    e.preventDefault();
    const formItem = new FormData();
    formItem.append("password", password);
    formItem.append("email", email);

    fetch(`${store.path}`, {
      method: "POST",
      body: formItem,
    })
      .then((response) => {
        if (!response.ok) {
          notifications.show({
            title: "Failed",
            message: "Seems there is something wrong 🤥",
            color: "red",
            autoClose: 1800,
            icon: <IconX />,
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.data.token) {
          navigate("/home");
        }
        // Handle the server's response
        localStorage.setItem("role", data.data.user.role);
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("route", data.data.route);
        localStorage.setItem("image", data.data.image);
        localStorage.setItem("id", data.data.user.id);
        localStorage.setItem("name", data.data.user.username);
      })
      .catch((error) => {
        // Handle any errors that occurred during the upload
        console.error("Upload failed:", error);
      });
  };
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div>
            {/* For service provider */}
            <div
              className="flex border-2 border-black rounded cursor-pointer py-7 px-10 justify-evenly"
              onClick={() => {
                dispatch(
                  setPath("http://127.0.0.1:3000/service_provider/login")
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
                <h3>For Service Providers</h3>
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
                dispatch(setPath("http://127.0.0.1:3000/customer/login"));
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
                <h3>For Client</h3>
              </div>
              <div> </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="flex h-screen justify-center align-center bg-gray-300">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Login</h1>
              <form className="flex flex-col gap-4 mt-6" onSubmit={loginForm}>
                <label htmlFor="Email">
                  Email:
                  <br />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-6 py-3 rounded-md mt-3"
                    style={{ fontSize: "18px" }}
                  />
                </label>

                <label htmlFor="Password">
                  Password:
                  <br />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="pl-6 py-3 rounded-md mt-3"
                    style={{ fontSize: "18px" }}
                  />
                </label>

                <button
                  type="submit"
                  className="bg-green-900 text-xl py-2 px-4 rounded-md text-white"
                >
                  Login
                </button>
              </form>

              <p className="mt-5">
                Don't have an account?
                <br />
                <button onClick={() => prevStep()} className="mr-10">
                  Back
                </button>
                <NavLink to="/register" className="text-blue-900 text-lg">
                  Sign Up
                </NavLink>
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      {renderForm()}
    </>
  );
}

export default Login;
