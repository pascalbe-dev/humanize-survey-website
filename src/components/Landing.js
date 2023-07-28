import { Link } from "gatsby";
import * as React from "react";
import down from "../img/down.svg";
import landing from "../img/landing.svg";

const Landing = ({ slogan, description }) => {
  return (
    <section className="h-[calc(100vh-96px)] flex flex-col justify-around">
      <div className="hidden lg:block" />
      <div className="flex justify-between items-center gap-16 px-8 lg:px-24 py-8 lg:py-0">
        <div
          data-sal="slide-up"
          className="flex-1 flex flex-col items-start gap-8"
        >
          <h1 className="text-5xl font-display">{slogan}</h1>
          <p className="text-onSurfaceMedium">{description}</p>
          <Link
            className="p-4 rounded-lg bg-accent text-onAccentHigh"
            to="https://app.culturyze.de/topics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jetzt direkt loslegen
          </Link>
        </div>
        <div className="flex-1 hidden items-center justify-center lg:flex">
          <img
            src={landing}
            alt="New-Work-Illustration"
            className="min-h-[400px] max-h-[600px]"
          />
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center animate-bounce">
        <Link to="#how">
          <img src={down} alt="Scrollen" className="h-30" />
        </Link>
      </div>
    </section>
  );
};

export default Landing;
