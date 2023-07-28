import * as React from "react";

import Layout from "../components/Layout";

const ImpressumPage = () => (
  <Layout>
    <main className="min-h-[calc(100vh-96px)] p-20 m-auto max-w-6xl flex flex-col gap-4">
      <h1 className="text-5xl">Impressum</h1>
      <h2 className="text-xl">Angaben gemäß § 5 TMG</h2>
      <p className="text-onSurfaceMedium">
        Humanize.works UG (haftungsbeschränkt)
        <br />
        Kleiberstraße 25
        <br />
        94315 Straubing
        <br />
        Handelsregister: HRB 13118
        <br />
        Registergericht: Amtsgericht Straubing
        <br />
        Vertreten durch: Patrick Kuglmeier
      </p>

      <h2 className="text-xl">Kontakt</h2>
      <p className="text-onSurfaceMedium">
        Telefon: <a href="tel:+49 151 11539717">+49 151 11539717</a>
        <br />
        E-Mail: <a href="mailto:info@humanize.works">info@humanize.works</a>
      </p>

      <h2 className="text-xl">Redaktionell Verantwortlicher</h2>
      <p className="text-onSurfaceMedium">
        Patrick Kuglmeier
        <br />
        Kleiberstraße 25
        <br />
        94315 Straubing
      </p>

      <h2 className="text-xl">EU-Streitschlichtung</h2>
      <p className="text-onSurfaceMedium">
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2 className="text-xl">
        Verbraucherstreitbeilegung/Universalschlichtungsstelle
      </h2>
      <p className="text-onSurfaceMedium">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2 className="text-xl">Haftung für Inhalte</h2>
      <p className="text-onSurfaceMedium">
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </p>
    </main>
  </Layout>
);

export default ImpressumPage;
