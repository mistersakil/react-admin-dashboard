import React from "react";
import "./container.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import Home from "../pages/home/Home";
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
              <Home />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Container;
