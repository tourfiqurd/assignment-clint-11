import React, { useRef, useState } from 'react';
import "./MyaOrders.css"
import useAuth from './../../hooks/useAuth';
import { useEffect } from 'react/cjs/react.development';
import SingleRow from './../AllOrders/SingleRow';

const MyOrders = () => {
    const { isLoading,
        signOutGoogle,
        googleSignIn,
        user, } = useAuth()
    const email = user.email

    const emailRef = useRef()
    const titleRef = useRef()
    const descRef = useRef()
    const dayRef = useRef()
    const priceRef = useRef()
    const [myOrders, setOrders] = useState([])
    fetch(`http://localhost:5000/orders/${email}`)
    const handleFormOnSubmit = (e) => {
        e.preventDefault()
        const image = emailRef.current.value
        const title = titleRef.current.value
        const desc = descRef.current.value
        const day = dayRef.current.value
        const price = priceRef.current.value

        const newService = { img: image, title: title, desc: desc, price: price, day: day }
        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newService)
        })


    }
    useEffect(() => {
        fetch(`http://localhost:5000/orders/users/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    console.log(myOrders);
    return (
        <div>
            <div className="text-center">
                <h1>Please Add Your Choice Place</h1>
                <p>Fill Out the form Bellow</p>
            </div>
            <div>
                <form onSubmit={handleFormOnSubmit} className='p-5'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Image address</label>
                        <input ref={emailRef} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Title</label>
                        <input ref={titleRef} type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Description</label>
                        <input type="text" ref={descRef} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Days</label>
                        <input ref={dayRef} type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Price</label>
                        <input ref={priceRef} type="text" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr >
                        <th className="text-center" scope="col">id</th>
                        <th className="text-center" scope="col">Title</th>
                        <th className="text-center" scope="col">Image</th>

                        <th className="text-center" scope="col">Email</th>
                        <th className="text-center" scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders?.map(order => <SingleRow key={order._id} data={order}></SingleRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;