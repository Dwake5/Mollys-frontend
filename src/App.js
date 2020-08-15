import React, { Component } from 'react'

import { Route, Switch, withRouter } from "react-router-dom";

import Heading from './components/Heading'
import NavBar from './components/NavBar'
import Prices from './components/Prices'
import Gallery from './components/Gallery'
import Business from './components/Business'
import Reviews from './components/Reviews'
import HomePage from './components/HomePage'

import { MainDiv } from './style'

import { validate } from './Services/api';

class App extends Component {
  state = {
    currentUser: "",
    height: window.innerHeight,
  };

  signin = user => {
    this.setState({ currentUser: user.username });
    localStorage.setItem("token", user.token);
  };
  
  signout = () => {
    this.setState({ currentUser: "" });
    localStorage.removeItem("token");
  };
  
  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);

    if (localStorage.token) {
      validate()
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          this.signin(data);
        }
      });
    }
  }
  
  scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions());
    localStorage.removeItem('lastForm')
  }
  
  updateWindowDimensions = () => {
    this.setState({ height: window.innerHeight });
  }
  
  render() {
    const { signin, signout } = this
    const { currentUser, height } = this.state
    console.log(height)
    return(
      <>
        { height > 500 &&
          <Heading currentUser={currentUser} signin={signin} signout={signout} />
        }
        <NavBar currentUser={currentUser} height={height}/>

        <MainDiv >
          <Switch>
            <Route
              exact path="/Services"
              render={ () => (
                <Prices />
                )} 
            />
            <Route
              exact path="/Gallery"
              render={ () => (
                <Gallery currentUser={currentUser}/>
                )} 
            />
            <Route
              exact path="/BusinessRecommendations"
              render={ () => (
                <Business />
                )} 
            />
            <Route
              exact path="/Reviews"
              render={ () => (
                <Reviews currentUser={currentUser}/>
                )} 
            />
            <Route
              path="/"
              render={props => (
                <HomePage {...props}/>
                )} 
            />
          </Switch>
        </MainDiv>
      </>
    )
  }
}

export default withRouter(App);
