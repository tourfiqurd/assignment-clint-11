import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';


const SingleProduct = (props) => {
    const { isLoading,
        signOutGoogle,
        googleSignIn,
        user, } = useAuth()

    const [conData, setConData] = useState(true)
    const handleButton = (data) => {
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => setConData(data.acknowledged))

        console.log(conData);
        if (conData) {
            alert("You Order is successfull")
        }
    }

    const { img, title, desc, price, day } = props.place
    const sendTo = { img: img, title: title, desc: desc, price: price, day: day, email: user.email }



    return (
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 ">



            <div className="card shadow-sm ">
                <img className="card-img" src={img} alt="Vans" />
                <div className="card-img-overlay d-flex justify-content-end">
                    <Link to="/" className="card-link text-danger like">
                        <i className="fas fa-heart"></i>
                    </Link>
                </div>
                <div className="card-body">
                    <p className="card-title fw-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
                    </svg>Name: {title}</p>

                    <p className="card-text">
                        <span className="fw-bold"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
                        </svg> Desc:</span>{desc} <br />
                        <span className="fw-bold"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
                        </svg> Days:</span>{day}


                    </p>


                    <div className="buy d-flex justify-content-between align-items-center">
                        <div className="price text-success"><h5 className="mt-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg> ${price}</h5></div>


                    </div>

                </div>

            </div>
            <button style={{ width: "355px" }} className="btn btn-block btn-primary" onClick={() => handleButton(sendTo)}>Add to Cart</button>
        </div>
    );
};

export default SingleProduct;