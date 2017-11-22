import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import resume from "./David-J-Carter-Resume.pdf";

const Index = ({ data }) => (
  <Content>
    <Helmet title={data.site.siteMetadata.title} />
    <h1>Hi, I'm David Carter.</h1>
    <h3>
      I am a web developer, passionate about learning and motivated by solving
      problems efficiently.
    </h3>
    <div className="btn-group">
      <a className="btn btn-primary" href={resume}>
        Download my resume
      </a>
      <Link className="btn btn-primary" to={`/projects/`}>
        Check out my work
      </Link>
      <Link className="btn btn-primary" to={`/posts/`}>
        Take a look at some of my posts
      </Link>
    </div>
  </Content>
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
