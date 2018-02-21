import React from "react";
import PropTypes from "prop-types";
import Archive from "../templates/archive";
import Content from "../components/styled/Content";
import Helmet from "react-helmet";

const Projects = ({ data }) => (
  <Content>
    <Helmet>
      {/* General Tags */}
      <title>{`All Projects | ${data.site.siteMetadata.title} | ${
        data.site.siteMetadata.tagline
      }`}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta
        name="image"
        content={`${data.site.siteMetadata.url}${
          data.profileImg.childImageSharp.sizes.src
        }`}
      />
      {/* Facebook Tags */}
      <meta property="og:locale" content="en_us" />
      <meta property="og:title" content="All Projects" />
      <meta
        property="og:url"
        content={`${data.site.siteMetadata.url}/projects/`}
      />
      <meta
        property="og:site_name"
        content={`${data.site.siteMetadata.title} | ${
          data.site.siteMetadata.tagline
        }`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
      <meta
        property="og:image"
        content={`${data.site.siteMetadata.url}${
          data.profileImg.childImageSharp.sizes.src
        }`}
      />
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@dajocarter" />
      <meta name="twitter:creator" content="@dajocarter" />
      <meta
        name="twitter:url"
        content={`${data.site.siteMetadata.url}/projects/`}
      />
      <meta name="twitter:title" content="All Projects" />
      <meta
        name="twitter:description"
        content={data.site.siteMetadata.description}
      />
      <meta
        name="twitter:image:src"
        content={`${data.site.siteMetadata.url}${
          data.profileImg.childImageSharp.sizes.src
        }`}
      />
    </Helmet>
    <Archive
      title={`All Projects`}
      items={data.projects.edges}
      prefix={`projects`}
    />
  </Content>
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
        tagline
        description
        url
      }
    }
    profileImg: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 500) {
          src
        }
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
