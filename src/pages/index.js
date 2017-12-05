import React from "react";
import PropTypes from "prop-types";
import Link, { navigateTo } from "gatsby-link";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import Anchor from "../components/styled/Anchor";
import styled from "styled-components";
import resume from "../../static/David-Carter-Resume.pdf";
import cvitae from "../../static/David-Carter-Curriculum-Vitae.pdf";

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
      <Anchor className="btn btn-primary" href={resume}>
        Relevant Resume
      </Anchor>
      <Anchor className="btn btn-primary" href={cvitae}>
        Complete Resume
      </Anchor>
      <Anchor className="btn btn-primary" to={`/projects/`}>
        View Work
      </Anchor>
      <Anchor className="btn btn-primary" to={`/posts/`}>
        Read Posts
      </Anchor>
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
