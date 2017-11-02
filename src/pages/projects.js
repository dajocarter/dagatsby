import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const Projects = ({ data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.frontmatter.slug}>
        <h3>
          <Link to={`/projects/${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </Link>
        </h3>
        <small>{node.frontmatter.date}</small>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
  </div>
);

Projects.propTypes = {
  route: PropTypes.object
};

export default Projects;

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "/**/*/src/projects/**/*.md" } }
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
