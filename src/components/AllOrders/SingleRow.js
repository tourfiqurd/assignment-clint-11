import React, { useState } from 'react';

const SingleRow = (props) => {
    const [order, setOrder] = useState([])
    const { img, title, desc, price, day, _id, email } = props.data
    const handleRemoveItem = (id) => {

        alert("dfdsfds")
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                if (data.deletedCount > 0) {
                    console.log(order);
                    alert("deleted successfully Please Relode the Page ctrl+R")



                }
                const remainingUsers = order?.filter(user => user._id != id)
                console.log(remainingUsers);

                setOrder(remainingUsers)

            })

    }


    return (

        <tr>
            <th className="text-center" scope="row">{_id}</th>
            <td className="text-center">{title}</td>
            <td className="text-center"><img width="50px" src={img} alt="" /></td>
            <td className="text-center">{email}</td>

            <td className="text-center">
                <button className="btn" onClick={() => handleRemoveItem(_id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-x-fill" viewBox="0 0 16 16">
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z" />
                </svg></button>
            </td>
        </tr>
    );
};

export default SingleRow;