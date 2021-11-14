import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Navbar = () => {
    const { isLoading,
        signOutGoogle,
        googleSignIn,
        user, } = useAuth()
    console.log(user.email);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light text-center ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" > <img width="80px" src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/08/Travelicious-logo.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/orders" className="nav-link active" aria-current="page" >My Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/allOrders" className="nav-link active" aria-current="page" >All Orders</Link>
                            </li>
                            {user.displayName ?
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link active" aria-current="page" >{user.displayName}<button onClick={signOutGoogle} className="btn" type="">Logout</button></Link>
                                </li> :
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link active" aria-current="page" ><button className="btn" type="">Login</button></Link>
                                </li>
                            }



                        </ul>


                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;