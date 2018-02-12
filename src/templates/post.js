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
    <Helmet>
      { /* General Tags */}
      <title>{`${data.markdownRemark.frontmatter.title} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={data.markdownRemark.frontmatter.description} />
      <meta name="image" content={`${data.site.siteMetadata.url}${data.markdownRemark.frontmatter.image.childImageSharp.sizes.src}`} />
      { /* Facebook Tags */}
      <meta property="og:title" content={data.markdownRemark.frontmatter.title} />
      <meta property="og:url" content={`${data.site.siteMetadata.url}/posts/${data.markdownRemark.frontmatter.slug}`} />
      <meta property="og:description" content={data.markdownRemark.frontmatter.description} />
      <meta property="og:image" content={`${data.site.siteMetadata.url}${data.markdownRemark.frontmatter.image.childImageSharp.sizes.src}`} />
      { /* Twitter Tags */}
      <meta name="twitter:title" content={data.markdownRemark.frontmatter.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@dajocarter" />
      <meta name="twitter:description" content={data.markdownRemark.frontmatter.description} />
      <meta name="twitter:image" content={`${data.site.siteMetadata.url}${data.markdownRemark.frontmatter.image.childImageSharp.sizes.src}`} />
    </Helmet>
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
        url
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
        slug
        date(formatString: "MMMM D, YYYY")
        description
        image {
          childImageSharp {
            sizes(maxWidth: 728) {
              src
            }
          }
        }
      }
    }
  }
`;
