import { Link } from "gatsby";
import * as React from "react";

const Cta = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-16 p-16 bg-primary text-onPrimaryHigh">
      <h2 className="text-3xl font-display text-center">
        Probier's doch einfach mal aus!
      </h2>
      <Link
        className="p-4 rounded-lg bg-accent text-onAccentHigh"
        to="/not-ready"
      >
        Jetzt direkt loslegen
      </Link>
    </section>
  );
};

export default Cta;
