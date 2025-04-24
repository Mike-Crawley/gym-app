import { NavLink } from "react-router-dom";
import "../css/BottomNav.css";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className="bottom-nav-item">
        Profile
      </NavLink>
      <NavLink to="/workouts" className="bottom-nav-item">
        Workouts
      </NavLink>
      <NavLink to="/settings" className="bottom-nav-item">
        Settings
      </NavLink>
    </nav>
  );
}