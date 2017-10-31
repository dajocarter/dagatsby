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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #04052e;
  padding: 2rem;
`;

const LogoHeader = styled.h1`
  flex: 0 0 auto;
  margin: 0;
`;

const LogoLink = StyledLink.extend`
  font-weight: 300;
`;

const Navigation = styled.nav`
  flex: 0 0 auto;
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.li`
  flex: 0 0 auto;
`;

const MenuLink = StyledLink.extend`
  display: block;
  text-transform: capitalize;
  padding: 0.5rem 1rem;
`;

const Main = styled.main`
  margin-top: 100px;
  padding: 2rem;
  min-height: calc(100vh - 164px);
`;

const Template = ({ data, children }) => (
  <div>
    <Header>
      <LogoHeader>
        <LogoLink to={`/`}>David Carter</LogoLink>
      </LogoHeader>
      <Navigation>
        <Menu>
          {data.allSitePage.edges.map(({ node }) => (
            <MenuItem key={node.path}>
              <MenuLink to={node.path}>{node.jsonName.slice(0, -5)}</MenuLink>
            </MenuItem>
          ))}
        </Menu>
      </Navigation>
    </Header>
    <Main>{children()}</Main>
  </div>
);

Template.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
  route: PropTypes.object
};

export default Template;

export const templateQuery = graphql`
  query menuQuery {
    allSitePage(filter: { path: { glob: "/*/", ne: "/dev-404-page/" } }) {
      edges {
        node {
          path
          jsonName
        }
      }
    }
  }
`;
