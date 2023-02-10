import { Link } from "gatsby";
import * as React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="bg-slate-800 text-gray-100 flex items-center justify-between p-16 text-sm">
        <div className="flex flex-col gap-4">
          <div>
            <span>Culture</span>
            <span>Clues</span>
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
      <section className="bg-slate-900 text-gray-100 flex items-center justify-between p-4 text-xs">
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
