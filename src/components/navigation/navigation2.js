import React from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
const Navigation2 = (props) => {
console.log("in nav",Cookies.get("accesstoken"));  
      return (
        <> 
        <nav style={{display: "flex", justifyContent: "flex-end"}}>
          <Link to="/"><p className="f3 link dim white underline pa3 pointer">Home</p></Link>
          <Link to={`/signout`}><p className="f3 link dim white underline pa3 pointer">Sign Out</p></Link>
        </nav> 
        </>
        );
    }    


export default Navigation2;