import React from "react";
import Helmet from "react-helmet";
import "./page.scss";

const Page = ({ data }) => (
  <div>
    <Helmet
      title={`${data.markdownRemark.frontmatter.title} | ${data.site
        .siteMetadata.title}`}
    />
    <div
      className="markdown-body template-page"
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
  </div>
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
