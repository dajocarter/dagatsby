import React from "react";
import Anchor from "../components/styled/Anchor";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #1d1e18;
  padding: 0 1rem;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

const HeaderBottomBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #c8c8c8;
`;

const LogoLink = styled(Anchor)`
  flex: 0 0 auto;
  font-size: 1.75rem;
  font-weight: 300;
  position: relative;
  z-index: 2;
  letter-spacing: 2px;
  border-bottom: 2px solid transparent;
  color: #ffffff;
  padding: 0.5rem;

  &.active,
  &:hover {
    color: #fe5500;
    text-decoration: none;
    border-color: #fe5500;
  }
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
  &:nth-child(1) {
    a {
      &.active,
      &:hover {
        border-color: #39cccc;
        color: #39cccc;
      }
    }
  }
  &:nth-child(2) {
    a {
      &.active,
      &:hover {
        border-color: #ffdc00;
        color: #ffdc00;
      }
    }
  }
  &:nth-child(3) {
    a {
      &.active,
      &:hover {
        border-color: #b10dc9;
        color: #b10dc9;
      }
    }
  }
`;

const MenuItemLink = styled(Anchor)`
  border-bottom: 2px solid transparent;
  color: #ffffff;
  display: block;
  text-transform: capitalize;
  position: relative;
  z-index: 2;
  padding: 1rem;
  transition: border-color 0.25s ease, color 0.25s ease;

  &.active,
  &:hover {
    text-decoration: none;
  }
`;

const Header = props => (
  <HeaderContainer home={props.home}>
    <HeaderBottomBorder />
    <LogoLink exact activeClassName={`active`} to={`/`}>
      David Carter
    </LogoLink>
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
