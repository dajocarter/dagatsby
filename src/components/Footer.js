import React from "react";
import styled from "styled-components";
import Anchor from "../components/styled/Anchor";
import InstaIcon from "react-icons/lib/fa/instagram";
import TwitterIcon from "react-icons/lib/fa/twitter";
import LinkedinIcon from "react-icons/lib/fa/linkedin";
import MailIcon from "react-icons/lib/fa/envelope";
import GithubIcon from "react-icons/lib/fa/github-alt";

const FooterContainer = styled.footer`
  background-color: #1d1e18;
  border-top: 2px solid #c8c8c8;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (max-width: 394px) {
    justify-content: center;
  }
`;

const Copyright = styled.p`
  flex: 0 0 auto;
  margin: 0;
  @media (max-width: 394px) {
    margin-top: 1rem;
    order: 2;
  }
`;

const IconGroup = styled.div`
  flex: 0 0 auto;
  width: 250px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
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

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>&copy; dajocarter</Copyright>
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
    </FooterContainer>
  );
};

export default Footer;
