import { Link } from "gatsby";
import * as React from "react";
import down from "../img/down.svg";
import landing from "../img/landing.svg";

const Landing = ({ slogan, description }) => {
  return (
    <section className="h-[calc(100vh-96px)] flex flex-col justify-around">
      <div />
      <div className="flex justify-between items-center gap-16 px-24">
        <div className="flex-1 flex flex-col items-start gap-8">
          <h1 className="text-5xl font-display">{slogan}</h1>
          <p className="text-onSurfaceMedium">{description}</p>
          <Link
            className="p-4 rounded-lg bg-accent text-onAccentHigh"
            to="https://humanize.works"
          >
            Jetzt direkt loslegen
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={landing}
            alt="New-Work-Illustration"
            className="min-h-[400px] max-h-[600px]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center animate-bounce">
        <Link to="#how">
          <img src={down} alt="Scrollen" className="h-30" />
        </Link>
      </div>
    </section>
  );
};

export default Landing;
