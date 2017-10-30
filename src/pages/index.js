import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const Index = ({ data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <h1>Hi, I'm David Carter.</h1>
    <h3>
      I'm passionate about building responsive websites for small businesses.
    </h3>
  </div>
);

Index.propTypes = {
  route: React.PropTypes.object
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
