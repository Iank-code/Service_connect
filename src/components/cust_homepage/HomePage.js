import { useEffect } from "react";
import "../../App.css";
import Filters from "./Filters";
import SearchItem from "./SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { setServicesData } from "../../redux/ServicesData";
import { NavLink, useNavigate } from "react-router-dom";

function HomePage() {
  const { servicesData } = useSelector((state) => state.services);
  const { searchTerm } = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => dispatch(setServicesData(data)));
  }, []);
  console.log(servicesData);

  const filteredServices = servicesData.filter((service) =>
    service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
      <div className="flex flex-row justify-between py-7 mobile:w-10">
        <div className="flex flex-row gap-10 ml-14 mobile:text-sm mobile:gap-4 mobile:ml-2">
          {/* For Logo */}
          <div>
            <span className="text-green-900">Service Connect</span>
          </div>

          {/* For Links */}
          <div className="flex gap-5 mobile:gap-2 mobile:text-sm">
            <NavLink to={"/home"} className="hover:text-green-900">
              Home
            </NavLink>
            <NavLink
              className="hover:text-green-900"
              onClick={() => {
                const role = localStorage.getItem("role");
                if (role === "customer") {
                  navigate("/dashboard/customer");
                }
              }}
            >
              Dashboard
            </NavLink>
          </div>
        </div>

        {/* For login and signup btns */}
        <div className="flex gap-5 mr-8 mobile:gap-2">
          <button
            className="bg-green-900 py-1 px-5 rounded-lg text-white outline-none mobile:text-sm mobile:px-1"
            onClick={() => {
              var path = localStorage.getItem("route");
              // fetch
              fetch(`${path}`, {
                method: "DELETE",
              }).then((res) => {
                if (!res.ok) {
                  throw new Error("Couldn't delete route");
                }
                localStorage.clear();
                navigate("/");
                res.json();
              });
            }}
          >
            Log Out
          </button>
        </div>
      </div>
      <SearchItem />
      <Filters />
      <div className="flex flex-wrap justify-between px-24">
        {filteredServices.map((service) => (
          <div key={service.id} className="m-8">
            <img src={service.image_url} alt={service.service_name} />
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

// {require(value.image_url)}
