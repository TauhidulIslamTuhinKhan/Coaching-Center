import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    console.log(services);

  useEffect(()=> {
    fetch('./services.JSON')
    .then(res => res.json())
    .then(data => setServices(data));
  },[])
    return (
        <div className="bg-area">
            <div className="container py-3">  
                <h2 className="text-center m-5">Our Services</h2>        
                <div className="row">         
                    {
                        services.slice(0, 4).map(service => <Service
                            key = {service.key}
                            service = {service}></Service> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;