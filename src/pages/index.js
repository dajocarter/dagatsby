import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";

const ActionLink = styled(Link)`
  color: #4ecdc4;
  text-decoration: none;
  &:hover {
    color: #ff6b6b;
  }
`;

const Index = ({ data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <h1>Hi, I'm David Carter.</h1>
    <h3>
      I'm passionate about building responsive websites for small businesses.
    </h3>
    <p>
      <ActionLink to={`/`}>Download my resume</ActionLink>,{" "}
      <ActionLink to={`/projects/`}>check out my work</ActionLink>, and{" "}
      <ActionLink to={`/posts/`}>take a look at some of my posts</ActionLink>.
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
