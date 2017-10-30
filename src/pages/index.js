import React from "react";
import StyledLink from "../components/StyledLink";
import Helmet from "react-helmet";

const Index = ({ data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <h1>Hi, I'm David Carter.</h1>
    <h3>
      I'm passionate about building responsive websites for small businesses.
    </h3>
    <p>
      <StyledLink to={`/`}>Download my resume</StyledLink>,{" "}
      <StyledLink to={`/projects/`}>check out my work</StyledLink>, and{" "}
      <StyledLink to={`/posts/`}>take a look at some of my posts</StyledLink>.
    </p>
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
