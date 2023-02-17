import PropTypes from "prop-types";
import React from "react";
import Cta from "../components/Cta";
import How from "../components/How";
import Landing from "../components/Landing";
import PrimarySurfaceCrossing from "../components/PrimarySurfaceCrossing";
import Why from "../components/Why";

const IndexPageTemplate = ({
  heading,
  subheading,
  valuePropositions,
  steps,
}) => {
  return (
    <>
      <Landing slogan={heading} description={subheading} />
      <How steps={steps} />
      <PrimarySurfaceCrossing />
      <Why valuePropositions={valuePropositions} />
      <Cta />
    </>
  );
};

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  valuePropositions: PropTypes.array,
  steps: PropTypes.array,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

export default IndexPageTemplate;
