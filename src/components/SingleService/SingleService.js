import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './SingleService.css'

const SingleService = (props) => {
    const {img, subject, duration, instructorImg, instructorName, courseFee } = props.service;
    return (
        <div className="col-lg-4">
            <Card className="mb-4" style={{ width: '26rem' }}>
            <Card.Img className="allservice-banner-img" variant="top" src={img} />
            <Card.Body>
                <Card.Title>Subject : {subject}</Card.Title>
                <p>Course Duration : {duration}</p>
                <div className="d-flex align-items-center">
                    <img className="inst-img" src={instructorImg} alt="" />
                    <p>{instructorName}</p>
                </div>
                <p>Course Price : {courseFee}</p> 
                <Button className="default-btn">Buy now</Button>              
            </Card.Body>
        </Card>
       </div>
    );
};

export default SingleService;