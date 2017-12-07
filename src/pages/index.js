import React from "react";
import PropTypes from "prop-types";
import Link, { navigateTo } from "gatsby-link";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import Anchor from "../components/styled/Anchor";
import styled, { keyframes } from "styled-components";
import resume from "../../static/David-Carter-Resume.pdf";
import cvitae from "../../static/David-Carter-Curriculum-Vitae.pdf";
import InstaIcon from "react-icons/lib/fa/instagram";
import TwitterIcon from "react-icons/lib/fa/twitter";
import LinkedinIcon from "react-icons/lib/fa/linkedin";
import MailIcon from "react-icons/lib/fa/envelope";
import GithubIcon from "react-icons/lib/fa/github-alt";
import PDFicon from "react-icons/lib/fa/file-pdf-o";

const Headline = styled.h1`
  margin-top: 0;
  text-align: center;
`;

const Blurb = styled.h2`
  text-align: center;
`;

const Divider = styled.div`
  position: relative;
  background-color: #cfd2da;
  height: 2px;
  width: 95%;
  margin: 3.5rem auto 1.5rem;
`;

const DividerText = styled.span`
  background-color: #252830;
  padding: 0.25rem;
  text-align: center;
  width: fit-content;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const BtnGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  .btn {
    margin: 0 1rem 1rem 0;
  }
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

const IconLink = styled.span`
  background-color: ${props => props.backgroundColor};
  width: 2rem;
  height: 2rem;
  animation-duration: 1s;
  animation-fill-mode: both;

  &:hover {
    animation-name: ${bounce};
    transform-origin: center bottom;
  }

  &,
  a {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    color: ${props => props.color};
    height: 100%;
    width: 100%;

    &:hover {
      color: ${props => props.color};
    }
  }
`;

const Index = ({ data }) => (
  <Content>
    <Helmet title={data.site.siteMetadata.title} />
    <Headline>Hi, I'm David Carter.</Headline>
    <Blurb>
      I am a web developer, passionate about learning and motivated by solving
      problems efficiently.
    </Blurb>
    <Divider>
      <DividerText>Follow Me</DividerText>
    </Divider>
    <BtnGroup>
      <IconLink backgroundColor={`#000`} color={`#fff`}>
        <Anchor
          title={`GitHub @dajocarter`}
          target="_blank"
          href={`//github.com/dajocarter`}
        >
          <GithubIcon />
        </Anchor>
      </IconLink>
      <IconLink backgroundColor={`#0077b5`} color={`#fff`}>
        <Anchor
          title={`LinkedIn @dajocarter`}
          target="_blank"
          href={`//www.linkedin.com/in/dajocarter`}
        >
          <LinkedinIcon />
        </Anchor>
      </IconLink>
      <IconLink backgroundColor={`#f00`} color={`#fff`}>
        <Anchor
          title={`Gmail @dajocarter`}
          target="_blank"
          href={`mailto:dajocarter@gmail.com`}
        >
          <MailIcon />
        </Anchor>
      </IconLink>
      <IconLink backgroundColor={`#1da1f2`} color={`#fff`}>
        <Anchor
          title={`Twitter @dajocarter`}
          target="_blank"
          href={`//twitter.com/dajocarter`}
        >
          <TwitterIcon />
        </Anchor>
      </IconLink>
      <IconLink backgroundColor={`#fff`} color={`#000`}>
        <Anchor
          title={`Instagram @dajocarter`}
          target="_blank"
          href={`//www.instagram.com/dajocarter`}
        >
          <InstaIcon />
        </Anchor>
      </IconLink>
    </BtnGroup>
    <Divider>
      <DividerText>Download Résumé</DividerText>
    </Divider>
    <BtnGroup>
      <Anchor className="btn btn-primary btn-icon" href={resume}>
        <PDFicon /> Relevant Résumé
      </Anchor>
      <Anchor className="btn btn-primary btn-icon" href={cvitae}>
        <PDFicon /> Curriculum Vitae
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
