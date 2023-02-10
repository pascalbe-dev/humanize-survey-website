import { Link } from "gatsby";
import * as React from "react";
import down from "../img/down.svg";
import landing from "../img/landing.svg";

const Landing = () => {
  return (
    <section className="h-[calc(100vh-96px)] flex flex-col justify-around">
      <div />
      <div className="flex justify-between items-center gap-16 px-24">
        <div className="flex-1 flex flex-col items-start gap-8">
          <h1 className="text-5xl font-display">
            Der einfachste Weg, Eure New-Work Kultur zu messen
          </h1>
          <p className="text-onSurfaceMedium">
            Teams, die ihre Kultur aktiv messen und weiterentwickeln erleben
            höhere Zufriedenheit, Innovationskraft und Produktivität. Mit
            CultureClues helfen wir euch dabei, euer volles Potential zu
            entfalten.
          </p>
          <Link
            className="p-4 rounded-lg bg-accent text-onAccentHigh"
            to="https://humanize.works"
          >
            Jetzt direkt loslegen
          </Link>
        </div>
        <div className="flex items-center justify-center flex-1">
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
