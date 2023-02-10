import { Link } from "gatsby";
import React from "react";
import logo from "../img/logo.svg";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center shadow-lg bg-surface z-50 h-24 sticky top-0"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="px-8 flex items-center gap-2 text-3xl font-display">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="CultureClues" className="w-20" />
        </Link>
        <div>
          <span>Culture</span>
          <span className="text-onSurfaceDisabled">Clues</span>
        </div>
      </div>
      <ul className="flex flex-row items-center gap-8 py-4 px-8 text-lg text-onSurfaceMedium">
        <li>
          <Link to="#how">Wie es funktioniert?</Link>
        </li>
        <li>
          <Link className="navbar-item" to="#why">
            Warum CulutreClues?
          </Link>
        </li>
        <li>
          <Link
            className="p-4 bg-orange-600 rounded-lg bg-accent text-onAccentHigh"
            to="https://humanize.works"
          >
            Jetzt direkt loslegen
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
