import React from "react";
import PropTypes from "prop-types";
import Archive from "../templates/archive";

const Projects = ({ data }) => (
  <Archive
    list={data.allMarkdownRemark.edges}
    title={`Projects | ${data.site.metaData.title}`}
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
      metaData {
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
            date(formatString: "MMMM D, YYYY")
            draft
            title
            tags
            links
          }
        }
      }
    }
  }
`;
