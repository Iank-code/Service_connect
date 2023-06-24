import { useEffect } from "react";
import "../../App.css";
import Filters from "./Filters";
import SearchItem from "./SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { setServicesData } from "../../redux/ServicesData";
import Navbar from "../Navbar";
import { NavLink, useNavigate } from "react-router-dom";



function HomePage() {
  const { servicesData } = useSelector((state) => state.services);
  const { searchTerm } = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();

    console.log(searchTerm);

    useEffect(() => {
        fetch("http://localhost:3000/services")
        .then((res) => res.json())
        .then((data) => dispatch(setServicesData(data)))
        
    },[]);
    console.log(servicesData);
    
    const filteredServices = servicesData.filter((service) => service.service_name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return (
            <div>
                <Navbar />
                <SearchItem/>
                <Filters/>
                <div className='flex flex-wrap justify-between px-24'>
                    {
                        filteredServices.map((service) => 
                        <div key={service.id} className='m-8 hover:cursor-pointer'>
                        <img src={service.image_url} alt={service.service_name} className="w-64 h-36 object-cover"/>
                            <span className='flex justify-between mt-2.5'>
                                <span>{service.service_name}</span>
                                <span className='flex'>
                                    <img src="/images/Star.png" alt="" className='max-h-5 mr-2'/>
                                    <span>{service.rating}</span>
                                </span>
                            </span>
                        </div>)
                    }
                </div>
            </div>
    )
};

export default HomePage;

// {require(value.image_url)}
