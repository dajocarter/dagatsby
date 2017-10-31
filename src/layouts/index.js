import React from "react";
import PropTypes from "prop-types";
import StyledLink from "../components/StyledLink";
import styled from "styled-components";
import "./index.scss";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #04052e;
  padding: 2rem;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const LogoHeader = styled.h1`
  float: left;
  margin: 0;
`;

const LogoLink = StyledLink.extend`
  font-weight: 300;
`;

const Main = styled.main`
  margin-top: 100px;
  padding: 2rem;
  min-height: calc(100vh - 164px);
`;

const Template = ({ location, children }) => (
  <div>
    <Header>
      <LogoHeader>
        <LogoLink to="/">David Carter</LogoLink>
      </LogoHeader>
    </Header>
    <Main>{children()}</Main>
  </div>
);

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object
};

export default Template;
