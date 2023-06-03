import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProviderFace from "./components/provider/ProviderFace";
import ServiceSelect from "./components/provider/serviceSelect/ServiceSelect";
import Skill from "./components/provider/skill/Skill";
import Location from "./components/provider/location/Location";
import Summary from "./components/provider/summary/Summary";

import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/provider" element={<ProviderFace />} />
          <Route path="/serviceSelect" element={<ServiceSelect />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/location" element={<Location />} /> 
          <Route path="/summary" element={<Summary />} /> 
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
