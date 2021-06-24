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
      { title: "Products", to: "/", icon: <LineWeight /> },
      { title: "Categories", to: "/", icon: <Category /> },
      { title: "Sales", to: "/", icon: <MonetizationOn /> },
    ],
  },
  {
    sidebarTitle: "Notifications",
    linksInfo: [
      { title: "Email", to: "/", icon: <MailOutline /> },
      { title: "Message", to: "/", icon: <ChatBubbleOutline /> },
      { title: "Feedback", to: "/", icon: <Face /> },
    ],
  },
  {
    sidebarTitle: "Reports",
    linksInfo: [
      { title: "Sales", to: "/", icon: <MonetizationOn /> },
      { title: "Profit", to: "/", icon: <AttachMoney /> },
      { title: "More", to: "/", icon: <More /> },
    ],
  },
  {
    sidebarTitle: "Settings",
    linksInfo: [
      { title: "User", to: "/", icon: <PermIdentity /> },
      { title: "General", to: "/", icon: <ViewAgenda /> },
      { title: "Language", to: "/", icon: <Language /> },
    ],
  },
];
const navLinksMapped = navLinks.map(({ sidebarTitle, linksInfo }, index) => {
  if (linksInfo.length) {
    return (
      <div className="sidebarWrapper" key={index}>
        <h3 className="sidebarTitle">{sidebarTitle}</h3>
        <ul className="sidebarNavLinks">
          {linksInfo.map(({ title, to, icon }, indexLink) => {
            return (
              <li
                key={indexLink}
                className={index === 0 && indexLink === 0 ? "active" : ""}
              >
                {icon}
                <a href={to}>{title}</a>
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
