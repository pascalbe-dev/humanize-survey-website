import { Link } from "gatsby";
import * as React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="flex items-center justify-between gap-4 p-8 lg:p-16 text-sm bg-primaryDarker text-onPrimaryHigh">
        <div className="flex flex-col gap-4">
          <div className="font-display">
            <span>culturyze</span>
          </div>
          <span>Ein Tool der Humanize.works UG.</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="uppercase">Rechtliches</span>
          <ul className="underline">
            <li>
              <Link to="/privacy-policy-website" target={"_blank"}>
                Datenschutzerklärung der Website
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy-app" target={"_blank"}>
                Datenschutzerklärung der Web-App
              </Link>
            </li>
            <li>
              <Link to="/impressum" target={"_blank"}>
                Impressum
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="text-gray-100 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-0 justify-between p-2 lg:p-4 text-xs bg-primaryDarkest text-onPrimaryMedium text-start">
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
