import React,{useEffect} from 'react';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';
import User from '../user/user.js';

const Profile = (props) => {

let history = useHistory();

       if(Cookies.get("accesstoken")) {
   fetch('http://localhost:4000/profile',{
          method: 'post',
          headers: {
              'Content-type': 'application/json',
              'authorization': "bearer " + Cookies.get("accesstoken")
              },
          body: JSON.stringify({})
        })
    .then(response => response.json())
    .then(data => {
             if(data.email)
             {
              console.log("came");
              console.log(data);
              return (
                     <User user={data}/>
                     );
             }
             else {
             console.log("cannot get details due to error");
             return (
              <>
              <h1 className="tc">Cannot get details due to error</h1>
              </>
              ); 
              }
       })
    .catch(err => {
       console.log("error in fetching");
    return (
       <>
       <h1 className="tc">Cannot get details due to error</h1>
       </>
       );
    }) 
}
else {
      history.push("/");
}
}

export default Profile;