// src/components/BottomNav.js
import { NavLink } from "react-router-dom";
import "../css/BottomNav.css";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className="nav-item">
        Profile
      </NavLink>
      <NavLink to="/workouts" className="nav-item">
        Workouts
      </NavLink>
      <NavLink to="/settings" className="nav-item">
        Settings
      </NavLink>
    </nav>
  );
}