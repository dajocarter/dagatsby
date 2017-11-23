import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import PropTypes from "prop-types";

const RegularLink = styled.a`
  text-shadow: none;
  background-image: none;
  color: #1997c6;

  &:hover {
    color: #e71d36;
    text-decoration: underline;
  }

  &.btn {
    border: 2px solid transparent;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    margin-top: 1rem;
    transition: all 0.15s ease-in-out;

    &.btn-primary {
      color: #fff;
      background-color: #1997c6;
      border-color: #1997c6;

      &:hover {
        background-color: #106382;
        border-color: #106382;
      }
    }

    &:focus,
    &:hover {
      text-decoration: none;
    }
  }
`;

const GatsbyLink = RegularLink.withComponent(Link);

const Anchor = ({ href, to, ...others }) => {
  return href ? (
    <RegularLink href={href} {...others} />
  ) : (
    <GatsbyLink to={to} {...others} />
  );
};

export default Anchor;

Anchor.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string
};
