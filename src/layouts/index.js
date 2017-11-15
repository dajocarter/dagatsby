import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styled from "styled-components";
import "./index.scss";

const Template = ({ children, data, location }) => (
  <div>
    <header>
      <h1>
        <Link to={`/`} className={`logo-link`}>
          David Carter
        </Link>
      </h1>
      <nav>
        <ul>
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
              <li key={node.path}>
                <Link to={node.path} activeClassName={`active`}>
                  {node.jsonName.slice(0, -5).replace(/\-/gi, " ")}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
    <main className={location.pathname === "/" ? `home` : `page`}>
      {children()}
    </main>
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
