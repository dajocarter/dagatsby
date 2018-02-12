import React from "react";
import PropTypes from "prop-types";
import Link, { navigateTo } from "gatsby-link";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import Anchor from "../components/styled/Anchor";
import styled, { keyframes } from "styled-components";
import resume from "../../static/David-Carter-Resume.pdf";
import cvitae from "../../static/David-Carter-Curriculum-Vitae.pdf";
import profileImg from "../../static/profile-pic.jpg";
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
  margin-top: 3.5rem;
  margin-right: auto;
  margin-bottom: ${props => (props.multiline ? `2.25rem` : `1.5rem`)};
  margin-left: auto;
`;

const DividerText = styled.span`
  background-color: #252830;
  padding: 0 0.75rem;
  text-align: center;
  width: fit-content;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const IconGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const BtnGroup = IconGroup.extend`
  @media (max-width: 400px) {
    flex-flow: column nowrap;

    .btn:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
`;

const IconLink = styled.span`
  background-color: ${props => props.backgroundColor};
  width: 2rem;
  height: 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(4px);
    transform-origin: center;
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
    <Helmet>
      { /* General Tags */}
      <title>{data.site.metaData.title}</title>
      <meta name="description" content={data.site.metaData.description} />
      <meta name="image" content={profileImg} />
      { /* Facebook Tags */}
      <meta property="og:title" content={data.site.metaData.title} />
      <meta property="og:url" content={data.site.metaData.url} />
      <meta property="og:description" content={data.site.metaData.description} />
      <meta property="og:image" content={profileImg} />
      { /* Twitter Tags */}
      <meta name="twitter:title" content={data.site.metaData.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@dajocarter" />
      <meta name="twitter:description" content={data.site.metaData.description} />
      <meta name="twitter:image" content={profileImg} />
    </Helmet>
    <Headline>Hi, I'm David Carter.</Headline>
    <Blurb>
      I am a web developer, passionate about learning and motivated by solving
      problems efficiently.
    </Blurb>
    <Divider multiline>
      <DividerText>
        Follow Me<br />
        <em>@dajocarter</em>
      </DividerText>
    </Divider>
    <IconGroup>
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
    </IconGroup>
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
      metaData {
        title
        description
        url
      }
    }
  }
`;
