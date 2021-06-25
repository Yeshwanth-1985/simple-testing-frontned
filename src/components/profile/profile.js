import React,{useEffect,useState} from 'react';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';
import User from '../user/user.js';

const Profile = (props) => {

let history = useHistory();

useEffect(() => {
       getprofile();
},[]);

const [user,setuser] = useState({});

const setdata = async (data) => {
    await setuser(data);
}

const getprofile = async () => {
       if(Cookies.get("accesstoken")) {
   try {
   const response = await fetch('https://fathomless-garden-10523.herokuapp.com/profile',{
          method: 'post',
          headers: {
              'Content-type': 'application/json',
              'authorization': "bearer " + Cookies.get("accesstoken")
              },
          body: JSON.stringify({})
        })
   const data = await response.json();
       setdata(data);
             }
    catch(err) {
       console.log("error in fetching",err);
}
}
       else {
              history.push("/");
       }
}

    return (
       <>
       { user.email ? <User user={user} /> : setTimeout(() => <h1>No data found </h1>, 3000) }
       </>
       ); 
}

export default Profile;