import React from 'react';
import './Footer.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="container">
           <div className="row">
                <div className="col-lg-6 footer-padding">
                    <div className="img">
                        <Link to="/home"><img src={logo} alt="" /></Link>                        
                        <p>Coaching centres offer classes as per subjects and help students to prepare well. Coaching centres offering specialized classes for Joint and Management entrances are already very popular. In the last few years many students have cracked entrance exams successfully after studying at these coaching centres.</p>
                    </div>
                </div>
                <div className="col-lg-2 footer-padding">
                    <h4>Study Home</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Our Success</li>                        
                    </ul>                    
                </div>
                <div className="col-lg-2 footer-padding">
                    <h4>Support</h4>
                    <ul>
                        <li>Help & Support</li>
                        <li>Privacy policy</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="col-lg-2 footer-padding">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Events</li>
                        <li>Become a Instructor</li>
                        <li>Partnarship</li>
                        <li>Get the app</li>
                    </ul>
                </div>
            </div> 
            <div className="text-center">
                <p>@2021 - Study Home. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;