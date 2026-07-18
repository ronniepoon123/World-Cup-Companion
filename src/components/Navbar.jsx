import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-logo">

        <span className="logo-icon">
          🏆
        </span>

        <div>

          <h2>World Cup Companion</h2>

          <span>
            FIFA World Cup 2026
          </span>

        </div>

      </div>

      <nav className="navbar-links">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          🏠 Home
        </NavLink>

        <NavLink
          to="/fixtures"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          📅 Fixtures
        </NavLink>

        <NavLink
          to="/"
        >
          📊 Standings
        </NavLink>

        <NavLink
          to="/"
        >
          🌍 Teams
        </NavLink>

      </nav>

    </header>
  );
}

export default Navbar;