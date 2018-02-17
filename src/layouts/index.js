import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
require("prismjs/themes/prism-twilight.css");

const Body = styled.div`
  background: #1d1e18;
  color: #cfd2da;

  blockquote {
    color: #cfd2da;
  }
`;

const Main = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 72px;
  @media (max-width: 576px) {
    margin-top: 143px;
  }
  @media (max-width: 480px) {
    margin-top: 122px;
  }
`;

const Template = ({ children, data, location }) => (
  <Body>
    <Header menuItems={data.allSitePage.edges} />
    <Main>{children()}</Main>
    <Footer />
  </Body>
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
