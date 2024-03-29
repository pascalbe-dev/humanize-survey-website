import { Link } from "gatsby";
import * as React from "react";

const How = ({ steps }) => {
  const shouldOpenInNewTab = (link) => link.startsWith("http");

  return (
    <section
      id="how"
      className="flex flex-col gap-4 px-8 lg:px-24 py-8 lg:py-16 bg-primary text-onPrimaryHigh"
    >
      <h2 className="font-display text-3xl">
        Analysiere die New Work Kultur deines Tech-Teams in {steps.length}{" "}
        einfachen Schritten:
      </h2>
      <ul className="flex flex-col gap-16 lg:gap-32 py-8 lg:py-32">
        {steps.map((step, index) => (
          <li
            data-sal={index % 2 === 0 ? "slide-right" : "slide-left"}
            key={step.title}
            className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32 items-center p-4 lg:even:flex-row-reverse"
          >
            <div className="flex flex-col gap-4 items-start max-w-[800px]">
              <h3 className="text-2xl">{step.title}</h3>
              <p className="text-onPrimaryMedium">{step.description}</p>
              <Link
                className="p-4 rounded-lg bg-accent text-onAccentHigh"
                to={step.cta.link}
                target={shouldOpenInNewTab(step.cta.link) ? "_blank" : "_self"}
              >
                {step.cta.title}
              </Link>
            </div>
            <a
              className="flex-1 flex items-center justify-center max-w-[600px]"
              href={step.image.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={"../img/" + step.image.filename}
                alt="Schritt-Illustration"
                className="min-w-[300px] drop-shadow-2xl"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default How;
