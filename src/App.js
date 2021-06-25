import React from 'react';
import Signin from './components/signin/signin.js';
import Register from './components/register/register.js';
import Navigation from './components/navigation/navigation.js';
import Home from './components/Home/home.js';
import Main from './components/main/main';
import Signout from './components/signout/signout.js';
import About from './components/about/about.js';
import Profile from './components/profile/profile.js';
import Cookies from 'js-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App(props) {

  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/">
        <>
      <Navigation/>
        <Main />
        </>
    </Route>
    <Route exact path="/signin">
        <>
      <Navigation/>
        <Signin />
        </>
    </Route>
    <Route exact path="/register">
        <>
        <Navigation/>
        <Register />
        </>
    </Route>
    <Route exact path="/home">
        <>
        <Navigation/>
        <Home />
        </>
    </Route>
    <Route exact path="/profile">
        <>
        <Navigation/>
        <Profile />
        </>
    </Route>
    <Route exact path="/about">
        <>
        <Navigation/>
        <About />
        </>
    </Route>
    <Route exact path="/signout">
        <>
        <Navigation/>
        <Signout />
        </>
    </Route>
    </Switch>
    </Router>
    </>);
}

export default App;
