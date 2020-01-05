import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
require("prismjs/themes/prism-twilight.css");

const Body = styled.div`
  background: #31322d;
  color: #c8c8c8;

  blockquote {
    color: #c8c8c8;
  }
`;

const Main = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 72px;
  @media (max-width: 576px) {
    margin-top: 143px;
  }
  @media (max-width: 480px) {
    margin-top: 122px;
  }
`;

const Template = ({ children }) => {
  const data = useStaticQuery(graphql`
    query menuQuery {
      allSitePage(filter: { path: { glob: "/*/" } }) {
        edges {
          node {
            path
            internalComponentName
          }
        }
      }
    }
  `)
  return (
    <Body>
      <Header menuItems={data.allSitePage.edges} />
      <Main>{children}</Main>
      <Footer />
    </Body>
  )
};

Template.propTypes = {
  children: PropTypes.func
};

export default Template;
