import "./sidebar.css";
import navLinks from "./navLinks";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">{navLinks}</div>
    </>
  );
}
