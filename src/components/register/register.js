import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';

const Register = (props) => {

let history = useHistory();

const [regemail,setemail] = useState('');
const [regname,setname] = useState('');
const [regpassword,setpassword] = useState('');

const onEmailChange = (e) => {
  setemail(e.target.value);
}

const onPasswordChange = (e) => {
  setpassword(e.target.value);
}

const onNameChange = (e) => {
  setname(e.target.value);
}

const onSubmit = async () => {
  if(regname && regemail && regpassword && regemail.includes('@') && regemail.includes('.com'))
  {
      try {
   const response = await fetch('https://fathomless-garden-10523.herokuapp.com/register',{
          method: 'post',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            email: regemail,
            password: regpassword,
            username: regname
          })
        });

    const data = await response.json();
      if(data.accesstoken)
      {
        await Cookies.set("accesstoken", data.accesstoken);
        history.push('/home');
      }
      else {
        if(data === "40101")
      alert("Unable to register,details already exist");
        else if(data === "40103")
      alert("Invalid data");
      else 
        if(data === "40102")
      alert("Unable to register");
      }
    }
    catch(err) {
    console.log("error in fetching");
    }
  }
  else {
    alert("invalid details");
  }
}

return (
	<article className="br4 ba b--white-10 mv4 w-100 w-50-m w-25-l mw10 shadow-5 center">
    <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="name"  
        id="name" 
        onChange={onNameChange}
        />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email-address"  
        id="email-address" 
        onChange={onEmailChange}
        />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
        <input 
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" 
        name="password"  
        id="password"
        onChange={onPasswordChange}
         />
      </div>
      </fieldset>
    <div className="">
      <input 
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Register" 
      onClick={onSubmit}/>
    </div>
  </div>
</main>
</article>
	);
}

export default Register;