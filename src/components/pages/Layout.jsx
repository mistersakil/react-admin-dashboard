import React, { useEffect } from "react";
import "./layout.css";
import { Link } from "react-router-dom";
import { ucFirstFunc } from "../../functions";
import navLinks from "./navLinks";
import { AddCircle } from "@material-ui/icons";
import { useParams } from "react-router-dom";
export default function Layout(props) {
  let { children, hasBreadcrumb, pageTitle } = props;
  pageTitle = pageTitle ?? "default";
  const hasCreateLink = navLinks[pageTitle].create ?? false;
  const urlParams = useParams();
  const paramId = urlParams.id ?? 0;

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
            className={!hasCreateLink ? "hidden" : "addNew"}
          >
            <AddCircle className="icon" />
            <span>Add New</span>
          </Link>

          <ul className="breadcrumbLinksContainer">
            <li className="breadcrumbLinksItem">
              <Link to={navLinks.home.path} className="breadcrumbLinksLink">
                {navLinks.home.title}
              </Link>
            </li>
            {navLinks[pageTitle].path.map((item, index) => {
              return (
                <li className="breadcrumbLinksItem" key={index}>
                  <Link
                    to={item.link(parseInt(paramId))}
                    className="breadcrumbLinksLink"
                    title={item.name}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
      {children}
    </main>
  );
}
