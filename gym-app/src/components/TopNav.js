import { NavLink } from "react-router-dom";
import "../css/TopNav.css";

export default function TopNavmNav() {
  return (
    <nav className="top-nav">
      <NavLink to="/" className="nav-item">
        Login
      </NavLink>
      <NavLink to="/" className="nav-item">
        Register
      </NavLink>
    </nav>
  );
}