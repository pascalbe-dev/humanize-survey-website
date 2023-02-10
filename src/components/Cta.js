import { Link } from "gatsby";
import * as React from "react";

const Cta = () => {
  return (
    <section className="flex justify-center items-center gap-16 p-16 bg-slate-700 text-white">
      <h2 className="text-lg">Probier' es doch einfach mal aus!</h2>
      <Link
        className="p-4 bg-orange-600 rounded-lg text-white"
        to="https://humanize.works"
      >
        Jetzt direkt loslegen
      </Link>
    </section>
  );
};

export default Cta;
