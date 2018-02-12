import React from "react";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import MarkdownBody from "../components/styled/MarkdownBody";

const Post = ({ data }) => (
  <Content>
    <Helmet
      title={`${data.markdownRemark.frontmatter.title} | ${data.site
        .metaData.title}`}
    />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <p>{data.markdownRemark.frontmatter.date}</p>
    <MarkdownBody
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
  </Content>
);

export default Post;

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      metaData {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
