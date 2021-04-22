import React, { Component } from 'react';
import './main.css';
import Navbar from './components/navbar.component';
import SideBar from './components/sidebar.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/welcome.component';
import Dashboard from './components/dashboard.component';
import FundingRequests from './components/fundingRequest.compoent';
import CsiNetwork from './components/csiNetwork.component';
import MyProfile from './components/myProfile.component';
import GrantTemplate from './components/views/grantTemplate.component';
import ApplyForListing from './components/views/applyForListing.component';
import login from './components/login';
import signup from './components/signUp';
import './css/font-awesome.min.css';

class App extends Component{

  render() {
    return(
      <BrowserRouter>
        <Route exact path="/signup" component={signup}/>
        <Route exact path="/login" component={login}/>
        <section id="dashBoardBody">
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SideBar />
                    <Route exact path="/"  component={WelcomePage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/fundingRequests" component={FundingRequests} />
                    <Route exact path="/csiNetwork" component={CsiNetwork} />
                    <Route exact path="/myProfile" component={MyProfile} />
                    <Route exact path="/grantUniqueId" component={GrantTemplate} />
                    <Route exact path="/applyUniqueId" component={ApplyForListing} />
                </div>
            </div>

        </section>
      </BrowserRouter>
    )
  }
}

export default App;


//HEY FUTURE ME! STOPPED AT 2:34:04! C'MON LET'S DO THIS!!!!!