import React, { useEffect, useState } from 'react';
import SingleRow from './SingleRow';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    console.log(allOrders);


    return (
        <div>

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
                        allOrders?.map(order => <SingleRow key={order._id} data={order}></SingleRow>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default AllOrders;