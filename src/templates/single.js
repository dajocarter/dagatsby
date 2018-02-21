import React from "react";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import MarkdownBody from "../components/styled/MarkdownBody";
import rehypeReact from "rehype-react";
import MarkdownVideo from "../components/markdown/video/MarkdownVideo";
import HeroUnit from "../components/HeroUnit";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "markdown-video": MarkdownVideo }
}).Compiler;

const Single = ({ data }) => (
  <Content>
    <Helmet>
      {/* General Tags */}
      <title>{`${data.page.frontmatter.title} | ${
        data.site.siteMetadata.title
      } | ${data.site.siteMetadata.tagline}`}</title>
      <meta name="description" content={data.page.frontmatter.description} />
      <meta
        name="image"
        content={`${data.site.siteMetadata.url}${
          data.page.frontmatter.image.childImageSharp.sizes.src
        }`}
      />
      {/* Facebook Tags */}
      <meta property="og:locale" content="en_us" />
      <meta property="og:title" content={data.page.frontmatter.title} />
      <meta
        property="og:url"
        content={`${data.site.siteMetadata.url}/${data.page.frontmatter.slug}/`}
      />
      <meta
        property="og:site_name"
        content={`${data.site.siteMetadata.title} | ${
          data.site.siteMetadata.tagline
        }`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={data.page.frontmatter.description}
      />
      <meta
        property="og:image"
        content={`${data.site.siteMetadata.url}${
          data.page.frontmatter.image.childImageSharp.sizes.src
        }`}
      />
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@dajocarter" />
      <meta name="twitter:creator" content="@dajocarter" />
      <meta
        name="twitter:url"
        content={`${data.site.siteMetadata.url}/${data.page.frontmatter.slug}/`}
      />
      <meta name="twitter:title" content={data.page.frontmatter.title} />
      <meta
        name="twitter:description"
        content={data.page.frontmatter.description}
      />
      <meta
        name="twitter:image:src"
        content={`${data.site.siteMetadata.url}${
          data.page.frontmatter.image.childImageSharp.sizes.src
        }`}
      />
    </Helmet>
    <HeroUnit
      sizes={data.page.frontmatter.image.childImageSharp.sizes}
      alt={``}
      headline={data.page.frontmatter.title}
      blurb={data.page.frontmatter.description}
    />
    <MarkdownBody>{renderAst(data.page.htmlAst)}</MarkdownBody>
  </Content>
);

export default Single;

export const singleQuery = graphql`
  query SingleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        tagline
        url
      }
    }
    page: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
        slug
        date(formatString: "MMMM D, YYYY")
        description
        image {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes_noBase64
              src
            }
          }
        }
      }
    }
  }
`;
