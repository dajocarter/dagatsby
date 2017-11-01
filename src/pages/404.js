import React from "react";
import Helmet from "react-helmet";

const FourOhFour = ({ data }) => (
  <div>
    <Helmet title={`${data.site.siteMetadata.title} | 404`} />
    <h1>404 Error</h1>
    <h2>You look lost.</h2>
    <h3>Use the sitemap below to find your way.</h3>
  </div>
);

export default FourOhFour;

export const pageQuery = graphql`
  query FourOhFourQuery {
    site {
      siteMetadata {
        title
      }
    }
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;
