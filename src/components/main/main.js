import React from 'react';
import Cookies from 'js-cookie';

const Main = (props) => {

    if(Cookies.get('accesstoken')) {
    	return (
		<>
		<h1 className="tc"> Succesfully logged in </h1>
		</>
		);
    }
    else {
    	return <>
      <h1 className="tc">Welcome to main, please login</h1>
      </>
    }
}

export default Main;