import React, { useContext } from 'react';
import { AuthContext } from './../AuthContext/AuthContex';


const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;