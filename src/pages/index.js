import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const Index = ({ data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <h1>Hi, I'm David Carter.</h1>
    <h3>
      I'm passionate about building responsive websites for small businesses.
    </h3>
    <p>
      <Link to={`/`}>Download my resume</Link>,{" "}
      <Link to={`/projects/`}>check out my work</Link>, and{" "}
      <Link to={`/posts/`}>take a look at some of my posts</Link>.
    </p>
  </div>
);

Index.propTypes = {
  route: PropTypes.object
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
