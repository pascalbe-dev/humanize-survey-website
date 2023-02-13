import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Cta from "../components/Cta";
import How from "../components/How";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import PrimarySurfaceCrossing from "../components/PrimarySurfaceCrossing";
import Why from "../components/Why";

export const IndexPageTemplate = ({
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

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        valuePropositions={frontmatter.valuePropositions}
        steps={frontmatter.steps}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        subheading
        valuePropositions {
          title
          description
        }
        steps {
          title
          description
          cta {
            title
            link
          }
          image
        }
      }
    }
  }
`;
