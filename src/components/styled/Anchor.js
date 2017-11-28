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
    background-color: #1997c6;
    background-image: none;
    color: #fff;
    border: 2px solid transparent;
    border-color: #1997c6;
    border-radius: 2px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
    padding: 0.125rem 0.25rem;
    margin: 1rem 1rem 1rem 0;
    outline: none;
    cursor: pointer;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    text-shadow: none;
    text-decoration: none;
    text-align: center;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

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
