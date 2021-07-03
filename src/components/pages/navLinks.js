const navLinks = {
  home: { title: "Home", path: "/", altTitle: "Dashboard" },
  users: {
    title: "Users",
    path: [{ name: "Users", link: "/users" }],
    create: "/users/create",
  },
  userCreate: {
    title: "Add New User",
    path: [
      { name: "Users", link: "/users" },
      { name: "Add New User", link: "/users/create" },
    ],
    create: "/users/create",
  },
  categories: {
    title: "Categories",
    create: "/categories/create",
    path: [
      { name: "Categories", link: "/categories" },
      { name: "Add New", link: "/categories/create" },
    ],
  },
  default: { title: "Default" },
};
export default navLinks;
