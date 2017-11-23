import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import styled from "styled-components";
import resume from "./David-J-Carter-Resume.pdf";

const Headline = styled.h1`
  margin-top: 0;
`;

const Blurb = styled.h3``;

const BtnGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

const Index = ({ data }) => (
  <Content>
    <Helmet title={data.site.siteMetadata.title} />
    <Headline>Hi, I'm David Carter.</Headline>
    <Blurb>
      I am a web developer, passionate about learning and motivated by solving
      problems efficiently.
    </Blurb>
    <BtnGroup>
      <a className="btn btn-primary" href={resume}>
        Download my resume
      </a>
      <Link className="btn btn-primary" to={`/projects/`}>
        Check out my work
      </Link>
      <Link className="btn btn-primary" to={`/posts/`}>
        Take a look at some of my posts
      </Link>
    </BtnGroup>
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
