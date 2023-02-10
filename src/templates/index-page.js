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
  description,
  intro,
}) => {
  return (
    <>
      <Landing slogan={heading} description={subheading} />
      <How />
      <PrimarySurfaceCrossing />
      <Why />
      <Cta />
    </>
  );
};

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
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
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
