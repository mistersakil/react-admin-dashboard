import { NavLink } from "react-router-dom";
import {
  Home,
  Category,
  MonetizationOn,
  LineWeight,
  MailOutline,
  ChatBubbleOutline,
  Face,
  PermIdentity,
  ViewAgenda,
  Language,
  AttachMoney,
  More,
} from "@material-ui/icons";
const navLinks = [
  {
    sidebarTitle: "Dashboard",
    linksInfo: [
      { title: "Home", to: "/", icon: <Home /> },
      { title: "Products", to: "/products", icon: <LineWeight /> },
      { title: "Categories", to: "/categories", icon: <Category /> },
      { title: "Sales", to: "/sales", icon: <MonetizationOn /> },
    ],
  },
  {
    sidebarTitle: "Notifications",
    linksInfo: [
      { title: "Email", to: "/email", icon: <MailOutline /> },
      { title: "Message", to: "/message", icon: <ChatBubbleOutline /> },
      { title: "Feedback", to: "/feedback", icon: <Face /> },
    ],
  },
  {
    sidebarTitle: "Reports",
    linksInfo: [
      { title: "Sales", to: "/sales-report", icon: <MonetizationOn /> },
      { title: "Profit", to: "/profit-report", icon: <AttachMoney /> },
      { title: "More", to: "/more-report", icon: <More /> },
    ],
  },
  {
    sidebarTitle: "Settings",
    linksInfo: [
      { title: "User", to: "/users", icon: <PermIdentity /> },
      { title: "General", to: "/general", icon: <ViewAgenda /> },
      { title: "Language", to: "/language", icon: <Language /> },
    ],
  },
];
const fireEvent = (event) => {
  window.scrollTo(0, 0);
  // console.log(event.target);
};
const navLinksMapped = navLinks.map(({ sidebarTitle, linksInfo }, index) => {
  if (linksInfo.length) {
    return (
      <div className="sidebarWrapper" key={index}>
        <h3 className="sidebarTitle">{sidebarTitle}</h3>
        <ul className="sidebarNavLinks">
          {linksInfo.map(({ title, to, icon }, indexLink) => {
            return (
              <li key={indexLink}>
                {icon}
                <NavLink
                  onClick={fireEvent}
                  to={to}
                  activeClassName="active"
                  exact
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return;
});
export default navLinksMapped;
