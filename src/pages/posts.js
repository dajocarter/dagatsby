import React from "react";
import PropTypes from "prop-types";
import Archive from "../templates/archive";

const Posts = ({ data }) => (
  <Archive title={`All Posts`} items={data.posts.edges} prefix={`posts`} />
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
