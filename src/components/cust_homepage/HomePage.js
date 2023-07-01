import { useEffect } from "react";
import "../../App.css";
import Filters from "./Filters";
import SearchItem from "./SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { setServicesData } from "../../redux/ServicesData";
import Navbar from "../Navbar";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

function HomePage() {
  const { servicesData } = useSelector((state) => state.services);
  const { searchTerm } = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => dispatch(setServicesData(data)));
  }, []);
  console.log(servicesData);

  const filteredServices = servicesData.filter((service) =>
    service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
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

      <SearchItem />
      <Filters />
      <div className="flex flex-wrap justify-between px-24">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="m-8 hover:cursor-pointer"
            onClick={() => navigate("/services")}
          >
            <img
              src={service.image_url}
              alt={service.service_name}
              className="w-64 h-36 object-cover"
            />
            <span className="flex justify-between mt-2.5">
              <span>{service.service_name}</span>
              <span className="flex">
                <img src="/images/Star.png" alt="" className="max-h-5 mr-2" />
                <span>{service.rating}</span>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
