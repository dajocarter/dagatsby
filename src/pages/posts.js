import React from "react";
import PropTypes from "prop-types";
import Archive from "../templates/archive";
import Content from "../components/styled/Content";
import Helmet from "react-helmet";

const Posts = ({ data }) => (
  <Content>
    <Helmet>
      {/* General Tags */}
      <title>{`All Posts | ${data.site.siteMetadata.title} | ${
        data.site.siteMetadata.tagline
      }`}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta
        name="image"
        content={`${data.site.siteMetadata.url}${
          data.profileImg.childImageSharp.sizes.src
        }`}
      />
      {/* Facebook Tags */}
      <meta property="og:locale" content="en_us" />
      <meta property="og:title" content="All Posts" />
      <meta
        property="og:url"
        content={`${data.site.siteMetadata.url}/posts/`}
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
        content={`${data.site.siteMetadata.url}/posts/`}
      />
      <meta name="twitter:title" content="All Posts" />
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
    <Archive title={`All Posts`} items={data.posts.edges} prefix={`posts`} />
  </Content>
);

Posts.propTypes = {
  route: PropTypes.object
};

export default Posts;

export const postsQuery = graphql`
  query PostsQuery {
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
    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { glob: "/**/*/src/posts/**/*.md" }
        frontmatter: { draft: { eq: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            date(formatString: "MMMM D, YYYY")
            image {
              childImageSharp {
                sizes(maxWidth: 660) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
            title
            tags
          }
        }
      }
    }
  }
`;
