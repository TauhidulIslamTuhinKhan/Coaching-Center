import { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './AllServices.css'

const AllServices = () => {
    const [services, setServices] = useState([]);  

  useEffect(()=> {
    fetch('./services.JSON')
    .then(res => res.json())
    .then(data => setServices(data));
  },[])
   
    return (
        <div className="bg-area">
          <div className="container py-5">
          <h2 className="text-center my-5">Our All Courses</h2>
           <div className="row my-auto">
                {
                    services.map(service=> <SingleService service={service}></SingleService>)
                }   
            </div> 
        </div>
        </div>
    );
};

export default AllServices;
