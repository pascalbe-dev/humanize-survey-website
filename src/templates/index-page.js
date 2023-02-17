import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import IndexPageTemplate from "../components/index-page-template";
import Layout from "../components/Layout";

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
