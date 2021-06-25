import React from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
const Navigation = (props) => {

    if(Cookies.get("accesstoken"))
    {
       return (
        <> 
        <nav style={{display: "flex", justifyContent: "flex-end"}}>
          <Link to="/home"><p className="f3 link dim white underline pa3 pointer">Home</p></Link>
          <Link to="/profile"><p className="f3 link dim white underline pa3 pointer">Profile</p></Link>
          <Link to="/about"><p className="f3 link dim white underline pa3 pointer">About</p></Link>
          <Link to="/signout"><p className="f3 link dim white underline pa3 pointer">Sign Out</p></Link>
        </nav> 
        </>
        );
    }
    else {
        return (
          <>
            <nav style={{display: "flex", justifyContent: "flex-end"}}>
             <Link to="/"><p className="f3 link dim white underline pa3 pointer">Home</p></Link>
             <Link to="/about"><p className="f3 link dim white underline pa3 pointer">About</p></Link>
             <Link to="/signin"><p className="f3 link dim white underline pa3 pointer">Login In</p></Link>
             <Link to="/register"><p className="f3 link dim white underline pa3 pointer">Register</p></Link>
            </nav>
        </>
      );
    }
  }

export default Navigation;