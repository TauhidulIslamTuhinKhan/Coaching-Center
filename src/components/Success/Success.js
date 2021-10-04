import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Success.css'

const Success = () => {
    const [successes, setSuccesses] = useState([]);    
    useEffect(()=> {
        fetch('./success.JSON')
        .then(res => res.json())
        .then(data => setSuccesses(data));
    }, [])

    
    return (
        <div className="bg-area">
            <div className="container py-5">
                <h2 className="text-center mb-5">Our Some Successful Student</h2>
                <div className="row">
                    
                        {
                            successes.map(success => 
                                
                                <div className="col-lg-4">
                                    <Card className="mb-4">                                        
                                        <Card.Img variant="top" src= {success?.img} />
                                        <Card.Body>
                                            <Card.Title>Name : {success?.name} </Card.Title>
                                            <p>Batch No : {success?.Batch} </p>
                                            <Card.Text>
                                                {success.description}
                                            </Card.Text>                                       
                                        </Card.Body>
                                    </Card>                              
                                </div>
                                )
                        }
                    
                </div>    
            </div>    
        </div>
    );
};

export default Success;