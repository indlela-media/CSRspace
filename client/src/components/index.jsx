//REACT Dependencies
import React, { useContext, useState } from 'react';
import { Route } from 'react-router-dom';
import login from './login';
import signup from './signUp';
import Navbar from './navbar.component';
import SideBar from './sidebar.component';
import WelcomePage from './welcome.component';
import Dashboard from './dashboard.component';
import MyProfile from './myProfile.component';
import CsiNetwork from './csiNetwork.component';
import FundingRequests from './fundingRequest.compoent';
import GrantTemplate from './views/grantTemplate.component';
import ApplyForListing from './views/applyForListing.component';
import SinglePost from './views/grantTemplate.component';

//GraphQL & Apollo Dependencies
import AuthRoute from '../util/authRoute';
import  { AuthContext } from '../context/Auth';

//Index Functional Component
export default function Index() {
    const { user, logout } = useContext(AuthContext);

    const clientSide = user ? (
        <section id="dashBoardBody">
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SideBar logout={logout} />
                    <Route exact path="/" component={WelcomePage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/fundingRequests" component={FundingRequests} />
                    <Route exact path="/csiNetwork" component={CsiNetwork} />
                    <Route exact path="/myProfile" component={MyProfile} />
                    <Route exact path="/grantUniqueId" component={GrantTemplate} />
                    <Route exact path="/applyUniqueId" component={ApplyForListing} />
                    <Route exact path="/posts/:postId" component={SinglePost}/>
                </div>
            </div>
        </section>
    ) : (
        <section>
            <AuthRoute exact path="/signup" component={signup} />
            <AuthRoute exact path="/" component={login} />
            {/* Have A 404 Page Aswell */}
        </section>
    )

    return clientSide;
}
