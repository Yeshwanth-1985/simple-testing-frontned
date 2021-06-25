import React from 'react';
import Cookies from 'js-cookie';
import {  Redirect } from "react-router-dom";


const Home = (props) => {
    
    if(Cookies.get('accesstoken')) {
    	return (
        <>
		<h1 className="tc"> This is Home  </h1>
		  </>
    );
    }
    else {
    	return <Redirect to='/' />
    }
}

export default Home;