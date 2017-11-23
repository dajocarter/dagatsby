import React from "react";
import PropTypes from "prop-types";
import Anchor from "../components/styled/Anchor";
import Helmet from "react-helmet";
import styled from "styled-components";
import Content from "../components/styled/Content";

const Project = styled.div``;
const Title = styled.h3``;
const MetaData = styled.small``;
const Excerpt = styled.p``;

const Projects = ({ data }) => (
  <Content>
    <Helmet title={`Projects | ${data.site.siteMetadata.title}`} />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Project key={node.frontmatter.slug}>
        <Title>
          <Anchor to={`/projects/${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </Anchor>
        </Title>
        <MetaData>{node.frontmatter.date}</MetaData>
        <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </Project>
    ))}
  </Content>
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
            date(formatString: "MMMM D, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
