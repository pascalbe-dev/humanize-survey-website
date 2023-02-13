import { Link } from "gatsby";
import * as React from "react";

const How = ({ steps }) => {
  return (
    <section
      id="how"
      className="flex flex-col gap-4 px-8 lg:px-24 py-8 lg:py-16 bg-primary text-onPrimaryHigh"
    >
      <h2 className="font-display text-3xl">
        Analyse der New Work Kultur in 4 einfachen Schritten:
      </h2>
      <ul className="flex flex-col gap-16 lg:gap-32 py-8 lg:py-32">
        {steps.map((step, index) => (
          <li
            data-sal={index % 2 === 0 ? "slide-right" : "slide-left"}
            key={step.title}
            className="flex justify-between gap-32 items-center p-4 even:flex-row-reverse"
          >
            <div className="flex flex-col gap-4 items-start max-w-[800px]">
              <h3 className="text-2xl">{step.title}</h3>
              <p className="text-onPrimaryMedium">{step.description}</p>
              <Link
                className="p-4 rounded-lg bg-accent text-onAccentHigh"
                to={step.cta.link}
              >
                {step.cta.title}
              </Link>
            </div>
            <div className="flex-1 hidden lg:flex items-center justify-center max-w-[400px]">
              <img
                src={"../img/" + step.image}
                alt="Schritt-Illustration"
                className="min-w-[300px]"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default How;
