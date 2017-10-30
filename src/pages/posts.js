import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const Posts = ({ data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.frontmatter.slug}>
        <h3>
          <Link to={`/posts/${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </Link>
        </h3>
        <small>{node.frontmatter.date}</small>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
  </div>
);

Posts.propTypes = {
  route: React.PropTypes.object
};

export default Posts;

export const pageQuery = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
