import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="bg-area">
            <div className="container py-5 text-center">
                <h2>The page you are looking for is not found</h2>
                <p className="error">Error : 404</p>
            </div>
        </div>
    );
};

export default NotFound;