import React from "react";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import MarkdownBody from "../components/styled/MarkdownBody";
import rehypeReact from "rehype-react";
import MarkdownVideo from "../components/markdown/video/MarkdownVideo";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "markdown-video": MarkdownVideo },
}).Compiler;

const Post = ({ data }) => (
  <Content>
    <Helmet
      title={`${data.markdownRemark.frontmatter.title} | ${data.site
        .siteMetadata.title}`}
    />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <p>{data.markdownRemark.frontmatter.date}</p>
    <MarkdownBody>{renderAst(data.markdownRemark.htmlAst)}</MarkdownBody>
  </Content>
);

export default Post;

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
