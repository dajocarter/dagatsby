import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import Content from "../components/styled/Content";

const Post = styled.div``;
const Title = styled.h3``;
const MetaData = styled.small``;
const Excerpt = styled.p``;

const Posts = ({ data }) => (
  <Content>
    <Helmet title={`Posts | ${data.site.siteMetadata.title}`} />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Post key={node.frontmatter.slug}>
        <Title>
          <Link to={`/posts/${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </Link>
        </Title>
        <MetaData>{node.frontmatter.date}</MetaData>
        <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </Post>
    ))}
  </Content>
);

Posts.propTypes = {
  route: PropTypes.object
};

export default Posts;

export const pageQuery = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "/**/*/src/posts/**/*.md" } }
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
