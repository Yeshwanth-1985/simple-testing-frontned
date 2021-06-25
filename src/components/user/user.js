import React,{useEffect} from 'react';
import * as ReactDOM from "react-dom";
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';

const User = (props) => {

if(Cookies.get("accesstoken")){
const {id,name,email,entries,joined} = props.user;

return (
	<>
	<article className="br4 ba b--white-10 mv4 w-100 w-50-m w-25-l mw10 shadow-5 center">
    <main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Profile</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        value={email}
        name="email-address"  
        id="email-address" 
        readOnly={true}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f5" htmlFor="username">Username</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="username"
        value={name} 
        id="username"
        readOnly={true} />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f5" htmlFor="entries">Entries</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="entries"
        value={entries} 
        id="entries" 
        readOnly={true}
        />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f5" htmlFor="joined">Joined</label>
        <input 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="joined"
        value={joined} 
        id="joined" 
        readOnly={true}
        />
      </div>
      </fieldset>
  </div>
</main>
</article>
	</>
	);
}
}

export default User;
