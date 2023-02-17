import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <main className="h-[calc(100vh-96px-244px)] bg-primary flex flex-col gap-8 justify-center items-center">
      <h1 className="text-9xl text-onPrimaryHigh">404</h1>
      <p className="text-xl text-onPrimaryMedium text-center">
        Ups, sorry, da bist du leider an der falschen Stelle rausgekommen.
        <br /> Hier geht es nicht weiter!
      </p>
      <Link
        className="p-4 bg-orange-600 rounded-lg bg-accent text-onAccentHigh"
        to="/"
      >
        Zurück zur Startseite
      </Link>
    </main>
  </Layout>
);

export default NotFoundPage;
