import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Content from "../components/styled/Content";
import MarkdownBody from "../components/styled/MarkdownBody";

const Page = ({ data }) => (
  <Layout>
    <Content>
      <Helmet
        title={`${data.markdownRemark.frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <MarkdownBody
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </Content>
  </Layout>
);

export default Page;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
