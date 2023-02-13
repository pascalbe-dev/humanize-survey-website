import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html
          className="scroll-smooth scroll-p-24 text-onSurfaceHigh"
          lang="en"
        />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
