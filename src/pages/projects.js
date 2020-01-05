import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ArchiveTemplate from "../templates/archive";

const Projects = () => {
  const data = useStaticQuery(graphql`
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
            excerpt(pruneLength: 280)
            frontmatter {
              slug
              date(formatString: "MMMM D, YYYY")
              image {
                childImageSharp {
                  fluid(maxWidth: 660) {
                    ...GatsbyImageSharpFluid_tracedSVG
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
  `)
  return (
    <ArchiveTemplate
      title={`All Projects`}
      items={data.projects.edges}
      prefix={`projects`}
    />
  )
};

export default Projects;
