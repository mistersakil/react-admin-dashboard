import "./users.css";
import { useEffect } from "react";

export default function Users() {
  useEffect(() => {
    document.title = `Users - ${document.title}`;
    // return () => {
    //   document.title = null;
    // };
  }, []);
  return (
    <section className="users">
      <h3>User List</h3>
    </section>
  );
}
