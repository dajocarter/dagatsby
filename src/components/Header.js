import React from "react";
import Anchor from "../components/styled/Anchor";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #252830;
  padding: 1rem;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 589px) {
    justify-content: center;
  }
`;

const Logo = styled.h1`
  flex: 0 0 auto;
  margin: 0;
`;

const LogoLink = styled(Anchor)`
  font-weight: 300;
`;

const Nav = styled.nav`
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

const MenuItemLink = styled(Anchor)`
  border-bottom: 2px solid transparent;
  display: block;
  text-transform: capitalize;
  padding: 0.5rem 0;
  transition: border-color 0.25s ease, color 0.25s ease;

  &.active {
    border-color: #e71d36;
    color: #e71d36;
    text-decoration: none;
  }
`;

const Header = props => (
  <HeaderContainer>
    <Logo>
      <LogoLink to={`/`}>David Carter</LogoLink>
    </Logo>
    <Nav>
      <Menu>
        {props.menuItems
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
              <MenuItemLink to={node.path} activeClassName={`active`}>
                {node.jsonName.slice(0, -5).replace(/\-/gi, " ")}
              </MenuItemLink>
            </MenuItem>
          ))}
      </Menu>
    </Nav>
  </HeaderContainer>
);

export default Header;
