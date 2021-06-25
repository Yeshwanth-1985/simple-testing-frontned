import React from 'react';
import Cookies from 'js-cookie';
import {Redirect} from "react-router-dom";


const Signout = (props) => {
    
    if(Cookies.get('accesstoken')) 
    	Cookies.remove('accesstoken');
    
    return <Redirect to="/" />
}

export default Signout;