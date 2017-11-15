import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styled from "styled-components";
import "./index.scss";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #04052e;
  padding: 1rem;
  @media (max-width: 589px) {
    justify-content: center;
  }
`;

const LogoHeader = styled.h1`
  flex: 0 0 auto;
  margin: 0;
`;

const LogoLink = styled(Link)`
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
  margin: 0;
  padding: 0 1rem;
`;

const MenuLink = styled(Link)`
  display: block;
  text-transform: capitalize;
  padding: 0.5rem 0;
`;

const Main = styled.main`
  margin-top: ${props => (props.location.pathname === "/" ? "0;" : "91px;")}
  margin-right: auto;
  margin-left: auto;
  max-width: ${props =>
    props.location.pathname === "/" ? "768px;" : "1024px;"}
  padding: 1rem;
  min-height: ${props =>
    props.location.pathname === "/" ? "100vh;" : "calc(100vh - 91px);"}
  display: flex;
  justify-content: ${props =>
    props.location.pathname === "/" ? "center;" : "flex-start;"}
  align-items: ${props =>
    props.location.pathname === "/" ? "center;" : "flex-start;"}
  @media (max-width: 589px) {
    margin-top: ${props => (props.location.pathname === "/" ? "0;" : "135px;")}
    min-height: ${props =>
      props.location.pathname === "/" ? "100vh;" : "calc(100vh - 135px);"}
  }
`;

const Template = ({ children, data, location }) => (
  <div>
    <Header>
      <LogoHeader>
        <LogoLink to={`/`}>David Carter</LogoLink>
      </LogoHeader>
      <Navigation>
        <Menu>
          {data.allSitePage.edges
            .filter(
              ({ node }) =>
                ![
                  "/404/",
                  "/dev-404-page/",
                  "/offline-plugin-app-shell-fallback/"
                ].includes(node.path)
            )
            .map(({ node }) => (
              <MenuItem key={node.path}>
                <MenuLink
                  to={node.path}
                  activeStyle={{
                    color: "#ff6b6b",
                    borderBottom: "2px solid #ff6b6b"
                  }}
                >
                  {node.jsonName.slice(0, -5).replace(/\-/gi, " ")}
                </MenuLink>
              </MenuItem>
            ))}
        </Menu>
      </Navigation>
    </Header>
    <Main location={location}>{children()}</Main>
  </div>
);

Template.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
  location: PropTypes.object,
  route: PropTypes.object
};

export default Template;

export const templateQuery = graphql`
  query menuQuery {
    allSitePage(filter: { path: { glob: "/*/" } }) {
      edges {
        node {
          path
          jsonName
        }
      }
    }
  }
`;
