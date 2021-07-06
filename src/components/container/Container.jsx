import React from "react";
import { Switch, Route } from "react-router-dom";
import "./container.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import UserCreate from "../pages/users/UserCreate";
import UserUpdate from "../pages/users/UserUpdate";
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
              <Switch>
                <Route path="/users" exact>
                  <Users pageTitle="users" hasBreadcrumb={true} />
                </Route>
                <Route path="/users/create" exact>
                  <UserCreate pageTitle="userCreate" hasBreadcrumb={true} />
                </Route>
                <Route path="/users/edit/:id" exact>
                  <UserUpdate pageTitle="userUpdate" hasBreadcrumb={true} />
                </Route>
                <Route path="/" exact>
                  <Home pageTitle="home" />
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
