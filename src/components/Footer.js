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

  @media (max-width: 488px) {
    justify-content: center;
  }
`;

const Copyright = styled.p`
  flex: 0 0 auto;
  margin: 0;

  @media (max-width: 488px) {
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

const IconWrapper = styled.span`
  background-color: ${props => props.backgroundColor};
  width: 2rem;
  height: 2rem;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    transform: translateY(4px);
    transform-origin: center;
  }
`;

const IconLink = styled(Anchor)`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  height: 100%;
  width: 100%;

  &:hover {
    color: ${props => props.color};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>&copy; 2017 David Carter</Copyright>
      <IconGroup>
        <IconWrapper backgroundColor={`#000`}>
          <IconLink
            color={`#fff`}
            title={`GitHub @dajocarter`}
            target="_blank"
            href={`//github.com/dajocarter`}
          >
            <GithubIcon />
          </IconLink>
        </IconWrapper>
        <IconWrapper backgroundColor={`#0077b5`}>
          <IconLink
            color={`#fff`}
            title={`LinkedIn @dajocarter`}
            target="_blank"
            href={`//www.linkedin.com/in/dajocarter`}
          >
            <LinkedinIcon />
          </IconLink>
        </IconWrapper>
        <IconWrapper backgroundColor={`#f00`}>
          <IconLink
            color={`#fff`}
            title={`Gmail @dajocarter`}
            target="_blank"
            href={`mailto:dajocarter@gmail.com`}
          >
            <MailIcon />
          </IconLink>
        </IconWrapper>
        <IconWrapper backgroundColor={`#1da1f2`}>
          <IconLink
            color={`#fff`}
            title={`Twitter @dajocarter`}
            target="_blank"
            href={`//twitter.com/dajocarter`}
          >
            <TwitterIcon />
          </IconLink>
        </IconWrapper>
        <IconWrapper backgroundColor={`#fff`}>
          <IconLink
            color={`#000`}
            title={`Instagram @dajocarter`}
            target="_blank"
            href={`//www.instagram.com/dajocarter`}
          >
            <InstaIcon />
          </IconLink>
        </IconWrapper>
      </IconGroup>
    </FooterContainer>
  );
};

export default Footer;
