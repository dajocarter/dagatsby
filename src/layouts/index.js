import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import "./index.scss";
import styled from "styled-components";
require("prismjs/themes/prism-twilight.css");

const Body = styled.div`
  background: #252830;
  color: #cfd2da;
`;

const Main = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${props => (props.home ? `center` : `flex-start`)};
  align-items: ${props => (props.home ? `center` : `flex-start`)};
  margin-top: ${props => (props.home ? `0px` : `91px`)};
  margin-right: auto;
  margin-left: auto;
  max-width: 768px;
  min-height: ${props => (props.home ? `100vh` : `calc(100vh - 91px)`)};
  padding: 1rem;
  @media (max-width: 589px) {
    margin-top: ${props => (props.home ? `0px` : `135px`)};
    min-height: ${props => (props.home ? `100vh` : `calc(100vh - 135px)`)};
  }
`;

const Template = ({ children, data, location }) => (
  <Body>
    <Header menuItems={data.allSitePage.edges} />
    <Main home={location.pathname === "/" ? true : false}>{children()}</Main>
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
