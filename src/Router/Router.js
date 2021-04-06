import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '../Nav/NavBar';
import TopBar from '../Nav/TopBar';

import LandingPage from '../LandingPage/LandingPage';
import ProductsPage from '../RouterPages/ProductsPage';
import Register from '../Register/Register';
import ShopToken from '../ProfileClient/ShopToken';
import ViewProduct from '../Product/ViewProduct';
import NavClient from '../Nav/NavClient';
import PartenarReq from '../Request/PartenarReq';
import PointDVReq from '../Request/PointDVReq';
import ProfilePage from '../RouterPages/ProfilePage';
import HowItWork from '../ProfileClient/HowItWork';

export default function Routers() {
      return (
            <Router>

                  <div>
                        <NavClient></NavClient>
                        <Switch>
                              <Route exact path="/" component={LandingPage}></Route>
                              <Route exact path="/product" component={ProductsPage}></Route>
                              <Route exact path="/register" component={Register}></Route>
                              <Route exact path="/shoptoken" component={ShopToken}></Route>
                              <Route exact path="/viewproduct" component={ViewProduct}></Route>
                              <Route exact path="/reqpartenaire" component={PartenarReq}></Route>
                              <Route exact path="/reqpointdv" component={PointDVReq}></Route>
                              <Route exact path="/profile" component={ProfilePage}></Route>
                              <Route exact path="/howdoesitwork" component={HowItWork}></Route>
                        </Switch>
                  </ div >
            </Router >
      )
}
