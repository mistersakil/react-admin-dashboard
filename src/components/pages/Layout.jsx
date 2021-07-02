import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";
import { ucFirstFunc } from "../../functions";
export default function Layout(props) {
  const breadcrumbLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/users",
      title: "Users",
    },
  ];
  const { children, hasBreadcrumb, pageTitle } = props;
  return (
    <main className="layout">
      {hasBreadcrumb && (
        <section className="breadcrumb">
          <h3 className="pageTitle">{ucFirstFunc(pageTitle)}</h3>
          <ul className="breadcrumbLinksContainer">
            {breadcrumbLinks.map(({ path, title }) => {
              return (
                <li className="breadcrumbLinksItem">
                  <Link to={path} className="breadcrumbLinksLink">
                    {title}
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
