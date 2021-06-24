import React from "react";
import "./container.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Home from "../pages/home/Home";
const Container = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <Sidebar />
          </div>
          <div className="col col8">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
