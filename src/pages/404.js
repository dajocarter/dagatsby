import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

const FourOhFour = ({ data }) => (
  <div>
    <Helmet title={`${data.site.siteMetadata.title} | 404`} />
    <h1>404 Error</h1>
    <h2>You look lost.</h2>
    <h3>Use the sitemap below to find your way.</h3>
    <h4>All Pages:</h4>
    <ul>
      {data.allSitePage.edges.map(({ node }) => (
        <li key={node.path}>
          <Link to={node.path}>{node.path}</Link>
        </li>
      ))}
    </ul>
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
