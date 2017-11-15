import React from "react";
import Link from "gatsby-link";
import "./Header.scss";

const Header = props => (
  <header>
    <h1>
      <Link to={`/`} className={`logo-link`}>
        David Carter
      </Link>
    </h1>
    <nav>
      <ul>
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
            <li key={node.path}>
              <Link to={node.path} activeClassName={`active`}>
                {node.jsonName.slice(0, -5).replace(/\-/gi, " ")}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  </header>
);

export default Header;
