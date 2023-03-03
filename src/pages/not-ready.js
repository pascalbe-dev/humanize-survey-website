import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const NotReadyPage = () => (
  <Layout>
    <main className="min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-96px-244px)] bg-primary flex justify-center items-center">
      <div
        data-sal="slide-up"
        className="m-8 flex flex-col gap-8 justify-center items-center text-center"
      >
        <h1 className="text-3xl text-onPrimaryHigh text-center">
          Wir sind noch nicht soweit 😥
        </h1>
        <p className="text-l text-onPrimaryMedium text-center max-w-xl">
          Wir freuen uns, dass du dir das Tool genauer ansehen möchtest! Leider
          sind wir noch nicht soweit mit der Entwicklung.
        </p>
        <p className="text-l text-onPrimaryMedium text-center max-w-xl">
          Wenn du Interesse daran hast, CultureClues zu verwenden,{" "}
          <strong className="text-onPrimaryHigh">
            dann nimm gerne Kontakt mit uns auf!
          </strong>{" "}
          Das motiviert uns und wir können dir dann Bescheid geben, wenn das
          Tool nutzbar ist.
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <a
            className="p-4 bg-orange-600 rounded-lg bg-accent text-onAccentHigh"
            href="mailto:info@humanize.works?subject=Ich interessiere mich für CultureClues"
          >
            Kontakt aufnehmen
          </a>
          <Link
            className="p-4 rounded-lg text-onPrimaryHigh bg-onPrimaryButton hover:bg-onPrimaryButtonHover"
            to="/"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  </Layout>
);

export default NotReadyPage;
