import { Link } from "gatsby";
import React from "react";
import logo from "../img/logo.svg";

//  TODO: use theming in tailwind
const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center shadow-lg bg-white z-50 h-24 sticky top-0"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="px-8 flex items-center gap-2 text-3xl">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="CultureClues" style={{ width: "88px" }} />
        </Link>
        <div>
          <span>Culture</span>
          <span>Clues</span>
        </div>
      </div>
      <ul className={"flex flex-row items-center gap-8 py-4 px-8 text-lg"}>
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
            className="p-4 bg-orange-600 rounded-lg text-white"
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
