import React from "react";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import MarkdownBody from "../components/styled/MarkdownBody";

const Page = ({ data }) => (
  <Content>
    <Helmet
      title={`${data.markdownRemark.frontmatter.title} | ${data.site
        .siteMetadata.title}`}
    />
    <MarkdownBody
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
  </Content>
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
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
