import React from "react";
import Helmet from "react-helmet";
import Content from "../components/styled/Content";
import styled from "styled-components";

const MarkdownBody = styled.div`
  h1,
  h2 {
    border-bottom: 1px solid #fff;
    margin: 2rem 0 1rem;
    padding-bottom: 0.5rem;
  }

  .gatsby-highlight {
    background-color: #141414;
    border-radius: 0.25rem;
    margin: 1rem 0;
    padding: 1rem;
    overflow: auto;

    pre[class*="language-"] {
      border: 0;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
      padding: 0;
      overflow: initial;
      float: left;
      min-width: 100%;
    }
  }

  .gatsby-highlight-code-line {
    background-color: #141414;
    display: block;
    margin-right: -1rem;
    margin-left: -1rem;
    padding-right: 1rem;
    padding-left: 0.75rem;
    border-left: 0.25rem solid #e9c163;
  }
`;

const Project = ({ data }) => (
  <Content>
    <Helmet
      title={`${data.markdownRemark.frontmatter.title} | ${data.site
        .siteMetadata.title}`}
    />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <p>{data.markdownRemark.frontmatter.date}</p>
    <MarkdownBody
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
  </Content>
);

export default Project;

export const projectQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
