import React from "react";
import { Switch, Route } from "react-router-dom";
import "./container.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
const Container = () => {
  return (
    <>
      <div className="mainWrapper">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col">
              <Sidebar />
            </div>
            <div className="col col2 ">
              {/* <Home />
              <Users /> */}
              <Switch>
                <Route path="/users" exact>
                  <Users />
                </Route>
                <Route path="/" exact>
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Container;
