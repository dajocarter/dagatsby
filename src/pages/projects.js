import React from "react";
import StyledLink from "../components/StyledLink";
import Helmet from "react-helmet";

const Projects = ({ data }) => (
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

Projects.propTypes = {
  route: React.PropTypes.object
};

export default Projects;

export const pageQuery = graphql`
  query ProjectsQuery {
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
