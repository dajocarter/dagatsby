import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Bio from "../components/Bio";

const BlogIndex = ({ data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <Bio />
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

BlogIndex.propTypes = {
  route: React.PropTypes.object
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
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
