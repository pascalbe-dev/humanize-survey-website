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
      <div className="px-8 flex items-center gap-2 text-xl lg:text-3xl font-display">
        <Link to="/" className="flex gap-4 items-center" title="Logo">
          <img src={logo} alt="culturyze logo" className="w-10 lg:w-20" />
          <div className="flex">
            <span>culturyze</span>
          </div>
        </Link>
      </div>
      <ul className="flex flex-row items-center gap-8 py-4 px-8 text-lg text-onSurfaceMedium">
        <li className="hidden lg:block">
          <Link to="#how">Wie es funktioniert?</Link>
        </li>
        <li className="hidden lg:block">
          <Link to="#why">Warum culturyze?</Link>
        </li>
        <li className="hidden lg:block">
          <Link
            className="p-4 bg-orange-600 rounded-lg bg-accent text-onAccentHigh"
            to="https://app.culturyze.de/topics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jetzt direkt loslegen
          </Link>
        </li>
        <li className="block lg:hidden">
          <Link
            className="p-4 bg-orange-600 rounded-lg bg-accent text-onAccentHigh"
            to="https://app.culturyze.de/topics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Loslegen
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
