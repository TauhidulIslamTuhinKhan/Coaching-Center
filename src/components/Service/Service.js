import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const {img, subject, duration, instructorImg, instructorName, courseFee } = props.service;
    return (       
       <div className="col-lg-3">
            <Card style={{ width: '18rem' }}>
            <Card.Img className="banner-img" variant="top" src={img} />
            <Card.Body>
                <Card.Title>Subject : {subject}</Card.Title>
                <p>Course Duration : {duration}</p>
                <div className="d-flex align-items-center">
                    <img className="inst-img" src={instructorImg} alt="" />
                    <p>{instructorName}</p>
                </div>
                <p>Course Price : {courseFee}</p>               
            </Card.Body>
        </Card>
       </div>
    
    );
};

export default Service;