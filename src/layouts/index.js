import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import "./index.scss";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: navy;
  padding: 10px;
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
  color: white;
  font-weight: 300;
  text-decoration: none;
`;

const Main = styled.main`
  margin-top: 60px;
  padding: 10px;
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
