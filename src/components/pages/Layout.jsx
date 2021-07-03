import React, { useEffect } from "react";
import "./layout.css";
import { Link } from "react-router-dom";
import { ucFirstFunc } from "../../functions";
import navLinks from "../../navLinks";
import { AddCircle } from "@material-ui/icons";
export default function Layout(props) {
  let { children, hasBreadcrumb, pageTitle } = props;
  pageTitle = pageTitle ?? "default";
  useEffect(() => {
    document.title = `${ucFirstFunc(
      pageTitle === "home" ? "dashboard" : navLinks[pageTitle].title
    )} - ${process.env.REACT_APP_BRAND}`;
  });
  return (
    <main className="layout">
      {hasBreadcrumb && (
        <section className="breadcrumb">
          <Link
            to={navLinks[pageTitle].create ?? "/"}
            title="Add New"
            className={!navLinks[pageTitle].create ? "hideContent" : "addNew"}
          >
            <AddCircle className="icon" />
          </Link>

          <ul className="breadcrumbLinksContainer">
            <li className="breadcrumbLinksItem">
              <Link to={navLinks.home.path} className="breadcrumbLinksLink">
                {navLinks.home.title}
              </Link>
            </li>
            {/* {navLinks[pageTitle].path.map((item) => {
              return (
                <li className="breadcrumbLinksItem">
                  <Link
                    to={navLinks[pageTitle].path.link}
                    className="breadcrumbLinksLink"
                  >
                    {navLinks[pageTitle].path.name}
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </section>
      )}
      {children}
    </main>
  );
}
