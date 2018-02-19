import React from "react";
import PropTypes from "prop-types";
import Archive from "../templates/archive";

const Projects = ({ data }) => (
  <Archive
    title={`All Projects`}
    items={data.projects.edges}
    prefix={`projects`}
  />
);

Projects.propTypes = {
  route: PropTypes.object
};

export default Projects;

export const projectsQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { glob: "/**/*/src/projects/**/*.md" }
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
