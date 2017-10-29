import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Bio from "../components/Bio";

const BlogIndex = ({ data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <Bio />
    {data.allMarkdownRemark.edges
      .filter(({ node }) => node.path !== "/404/")
      .map(({ node }) => (
        <div key={node.frontmatter.path}>
          <h3>
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
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
            path
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
