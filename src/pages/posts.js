import React from "react";
import PropTypes from "prop-types";
import StyledLink from "../components/StyledLink";
import Helmet from "react-helmet";

const Posts = ({ data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.frontmatter.slug}>
        <h3>
          <StyledLink to={`/posts/${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </StyledLink>
        </h3>
        <small>{node.frontmatter.date}</small>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
  </div>
);

Posts.propTypes = {
  route: PropTypes.object
};

export default Posts;

export const pageQuery = graphql`
  query PostsQuery {
    site {
      siteMetadata {
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
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
