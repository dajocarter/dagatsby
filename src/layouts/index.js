import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import "./index.scss";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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

const LogoLink = styled(Link)`
  color: #4ecdc4;
  font-weight: 300;
  text-decoration: none;
  &:hover {
    color: #ff6b6b;
  }
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
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
