import React from "react";
import PropTypes from "prop-types";
import Archive from "../templates/archive";

const Posts = ({ data }) => (
  <Archive
    list={data.allMarkdownRemark.edges}
    title={`Posts | ${data.site.metaData.title}`}
    prefix={`posts`}
  />
);

Posts.propTypes = {
  route: PropTypes.object
};

export default Posts;

export const postsQuery = graphql`
  query PostsQuery {
    site {
      metaData {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "/**/*/src/posts/**/*.md" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            date(formatString: "MMMM D, YYYY")
            draft
            title
            tags
          }
        }
      }
    }
  }
`;
