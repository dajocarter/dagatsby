import React from "react";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import MarkdownBody from "../components/styled/MarkdownBody";

const Page = ({ data }) => (
  <Content>
    <Helmet>
      {/* General Tags */}
      <title>{`${data.page.frontmatter.title} | ${
        data.site.siteMetadata.title
      } | ${data.site.siteMetadata.tagline}`}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta
        name="image"
        content={`${data.site.siteMetadata.url}${
          data.profileImg.childImageSharp.sizes.src
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
        content={data.site.siteMetadata.description}
      />
      <meta
        property="og:image"
        content={`${data.site.siteMetadata.url}${
          data.profileImg.childImageSharp.sizes.src
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
        content={data.site.siteMetadata.description}
      />
      <meta
        name="twitter:image:src"
        content={`${data.site.siteMetadata.url}${
          data.profileImg.childImageSharp.sizes.src
        }`}
      />
    </Helmet>
    <MarkdownBody dangerouslySetInnerHTML={{ __html: data.page.html }} />
  </Content>
);

export default Page;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        tagline
        description
        url
      }
    }
    profileImg: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 500) {
          src
        }
      }
    }
    page: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`;
