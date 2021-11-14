import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="p-5 text-center">
            <img width="50%" src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1920.jpg" alt="" />
            <br />
            <br />
            <br />
            <br />
            <h1>The Page You are Looking For does Not Exist</h1>
            <Link to="/"> <button className="btn btn-outline-primary">Go to HomePage</button></Link>
        </div>
    );
};

export default NotFound;