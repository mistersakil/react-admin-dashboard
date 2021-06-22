import React from "react";
import "./container.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
const Container = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <Sidebar />
          </div>
          <div className="col col8">right side</div>
        </div>
      </div>
      {/* <div className="footer">
        <p className="footerContent">Copyright &copy;</p>
      </div> */}
    </>
  );
};

export default Container;
