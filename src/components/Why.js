import * as React from "react";
import why from "../img/why.svg";

const Why = ({ valuePropositions }) => {
  return (
    <section id="why" className="flex flex-col gap-8 px-24 py-16">
      <h2 className="font-display text-3xl">Warum CultureClues?</h2>
      <div className="flex justify-between gap-8">
        <ul className="flex-1 flex flex-col gap-4">
          {valuePropositions.map((vp) => (
            <li
              data-sal="slide-right"
              key={vp.title}
              className="flex flex-col gap-4 p-4"
            >
              <h3 className="text-2xl">{vp.title}</h3>
              <p className="text-onSurfaceMedium">{vp.description}</p>
            </li>
          ))}
        </ul>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={why}
            alt="Vorteile-Illustration"
            className="min-h-[300px] max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Why;
