const navLinks = {
  home: { title: "Home", path: "/", altTitle: "Dashboard" },
  users: { title: "Users", path: "/users", create: "/users/create" },
  userCreate: {
    title: "Add New User",
    path: [
      { name: "Users", link: "/users" },
      { name: "Add New", link: "/users/create" },
    ],
    create: "/users/create",
  },
  categories: { title: "Categories", path: "/categories" },
  default: { title: "Default" },
};
export default navLinks;
