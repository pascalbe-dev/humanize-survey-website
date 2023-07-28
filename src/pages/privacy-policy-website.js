import * as React from "react";

import Layout from "../components/Layout";

const PrivacyPolicyWebsitePage = () => (
  <Layout>
    <main className="min-h-[calc(100vh-96px)] p-20 m-auto max-w-6xl flex flex-col gap-4">
      <h1 className="text-5xl flex items-end gap-4">
        Datenschutzerklärung
        <span className="text-xl text-onSurfaceDisabled">
          (für culturyze.de)
        </span>
      </h1>
      <p className="text-onSurfaceMedium">
        Vielen Dank für Ihren Besuch auf unserer Website! Der Schutz Ihrer
        persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend möchten
        wir Sie ausführlich über den Umgang mit Ihren Daten informieren.
      </p>

      <h2 className="text-3xl">1. Verantwortliche Stelle</h2>
      <p className="text-onSurfaceMedium">
        Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
        <br />
        Humanize.works UG (haftungsbeschränkt)
        <br />
        Kleiberstraße 25, 94315 Straubing
        <br />
        info@humanize.works
      </p>

      <h2 className="text-3xl">
        2. Datenerfassung beim Besuch unserer Website
      </h2>
      <h3 className="text-xl">2.1. Hosting über Netlify CDN</h3>
      <p className="text-onSurfaceMedium">
        Unsere Website wird über den Netlify CDN (Content Delivery Network)
        gehostet, wodurch eine schnelle Auslieferung der Inhalte gewährleistet
        wird. Bei jedem Zugriff auf unsere Website werden von Netlify
        automatisch Informationen erfasst und in Server-Logfiles gespeichert.
        Diese Daten beinhalten unter anderem IP-Adressen, Datum und Uhrzeit des
        Zugriffs, Browsertyp und Betriebssystem, sowie die aufgerufene Seite.
        Diese Daten dienen ausschließlich statistischen Auswertungen und zur
        Sicherstellung eines reibungslosen Betriebs der Website. Eine
        Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
        vorgenommen.
      </p>

      <h3 className="text-xl">2.2. Verwendung von Google Fonts</h3>
      <p className="text-onSurfaceMedium">
        Für eine ansprechende Darstellung unserer Website verwenden wir Google
        Fonts, die jedoch bereits während des Build-Prozesses in unsere Website
        eingebunden werden. Dadurch wird verhindert, dass der Browser der
        Website-Besucher eine direkte Verbindung zu den Servern von Google
        herstellt. Es werden keine Cookies von Google Fonts auf Ihrem Endgerät
        gespeichert.
      </p>

      <h2 className="text-3xl">
        3. Einsatz von Matomo (anonymisiertes Tracking)
      </h2>
      <h3 className="text-xl">3.1. Allgemeines</h3>
      <p className="text-onSurfaceMedium">
        Wir nutzen Matomo (ehemals Piwik), ein Open-Source-Webanalysetool, um
        das Besucherverhalten auf unserer Website zu analysieren und unser
        Angebot zu verbessern. Matomo arbeitet im Cookieless Modus und speichert
        keinerlei personenbezogene Daten über die Website-Besucher.
      </p>

      <h3 className="text-xl">3.2. Anonymisierte IP-Adressen</h3>
      <p className="text-onSurfaceMedium">
        Bevor Ihre IP-Adresse in den Matomo-Datenbanken gespeichert wird, wird
        sie anonymisiert. Dadurch können wir nicht auf einzelne Nutzer
        schließen, da die anonymisierten IP-Adressen keiner spezifischen Person
        zugeordnet werden können.
      </p>

      <h3 className="text-xl">3.3. Hosting über die Matomo Cloud</h3>
      <p className="text-onSurfaceMedium">
        Unsere Matomo-Installation ist in der Matomo Cloud gehostet. Dabei
        werden die Daten auf Servern in einem von Matomo betriebenen
        Rechenzentrum gespeichert. Die Datenverarbeitung erfolgt somit in
        Übereinstimmung mit den geltenden Datenschutzbestimmungen.
      </p>

      <h2 className="text-3xl">4. Ihre Rechte</h2>
      <p className="text-onSurfaceMedium">
        Selbstverständlich haben Sie das Recht, Auskunft über die von uns über
        Sie gespeicherten Daten zu erhalten. Ebenso haben Sie das Recht auf
        Berichtigung, Sperrung oder Löschung Ihrer personenbezogenen Daten.
        Kontaktieren Sie uns dazu einfach über die oben genannten
        Kontaktinformationen.
      </p>

      <h2 className="text-3xl">5. Änderungen dieser Datenschutzerklärung</h2>
      <p className="text-onSurfaceMedium">
        Wir behalten uns das Recht vor, diese Datenschutzerklärung gelegentlich
        anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen
        entspricht oder um Änderungen unserer Dienstleistungen umzusetzen. Für
        Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
      </p>

      <br />
      <p>Stand: 28. Juli 2023</p>
    </main>
  </Layout>
);

export default PrivacyPolicyWebsitePage;
