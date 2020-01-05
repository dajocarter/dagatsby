import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Anchor from "../components/styled/Anchor";
import Content from "../components/styled/Content";

const FourOhFour = () => {
  const data = useStaticQuery(graphql`
    query FourOhFourQuery {
      site {
        siteMetadata {
          title
        }
      }
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Content>
        <Helmet title={`${data.site.siteMetadata.title} | 404`} />
        <h1>404 Error</h1>
        <h2>You look lost.</h2>
        <h3>Use the sitemap below to find your way.</h3>
        <h4>All Pages:</h4>
        <ul>
          {data.allSitePage.edges.map(({ node }) => (
            <li key={node.path}>
              <Anchor to={node.path}>{node.path}</Anchor>
            </li>
          ))}
        </ul>
      </Content>
    </Layout>
  );
};

export default FourOhFour;
