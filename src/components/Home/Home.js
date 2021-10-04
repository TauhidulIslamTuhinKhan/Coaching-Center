import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
// import hero from '../images/hero-img.jpg'
import './Home.css'





const Home = () => {
const [services, setServices] = useState([]);  

  useEffect(()=> {
    fetch('./services.JSON')
    .then(res => res.json())
    .then(data => setServices(data));
  },[])

  
    return (
        <div>
            <div className="hero-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-text d-flex align-items-center">
                                <div className="left-text">
                                    <p className="top-text">Know Thyself</p>
                                    <h1 className="heading-text">Find The Right <br /> Mentor for yourself </h1>
                                    <p className="bottom-text">Meet the best Tutor who will share their <br /> Expriences...</p>
                                    <button className="btn default-btn">So, Get Started?</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </div>

            <div className="bg-area">                
                <div className="container py-5">  
                    <h2 className="text-center m-3">Explore Our Popular Courses</h2>        
                    <div className="row">         
                        {
                            services.slice(0, 4).map(service => <Service
                                key = {service.key}
                                service = {service}></Service> )
                        }
                    </div>
                </div>                
            </div>

        </div>
            
        
    );
};

export default Home;