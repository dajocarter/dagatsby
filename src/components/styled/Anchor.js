import React from "react";
import { Link } from "gatsby";
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

  &.button {
    background-color: transparent;
    background-image: none;
    color: #fe7f2d;
    border: 1px solid transparent;
    border-color: #c8c8c8;
    border-radius: 2px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
    display: inline-block;
    padding: 0.5rem 1rem;
    outline: 0;
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 0.5px;
    text-shadow: none;
    text-decoration: none;
    text-align: center;
    transition: 0.2s ease-out;

    &:focus,
    &:hover {
      color: #e71d36;
      text-decoration: none;
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14),
        0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
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
