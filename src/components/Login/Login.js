import React from 'react';
import "./Login.css"
import useAuth from './../../hooks/useAuth';

const Login = () => {
    const { isLoading,
        signOutGoogle,
        googleSignIn,
        user, } = useAuth()
    return (
        <div className="main-container">
            <div className="d-flex justify-center align-items-center">
                <div>

                    <button onClick={googleSignIn} className="btn btn-success btn-lg">Google Login</button>

                </div>

            </div>

        </div>
    );
};

export default Login;