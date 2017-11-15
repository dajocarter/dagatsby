import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./index.scss";

const Template = ({ children, data, location }) => (
  <div>
    <Header menuItems={data.allSitePage.edges} />
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
