import { Link } from "gatsby";
import * as React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="flex items-center justify-between p-16 text-sm bg-primaryDarker text-onPrimaryHigh">
        <div className="flex flex-col gap-4">
          <div className="font-display">
            <span>Culture</span>
            <span className="text-onPrimaryMedium">Clues</span>
          </div>
          <span>Ein Tool der Humanize.works UG.</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="uppercase">Rechtliches</span>
          <ul className="underline">
            <li>
              <Link to="https://humanize.works/privacy" target={"_blank"}>
                Datenschutzerklärung
              </Link>
            </li>
            <li>
              <Link to="https://humanize.works/impressum" target={"_blank"}>
                Impressum
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="text-gray-100 flex items-center justify-between p-4 text-xs bg-primaryDarkest text-onPrimaryMedium">
        <span className="uppercase">
          © copyright 2023 Humanize.works UG (haftungsbeschränkt)
        </span>
        <span className="uppercase">
          made with ❤ by the Humanize.works team
        </span>
      </section>
    </footer>
  );
};

export default Footer;
