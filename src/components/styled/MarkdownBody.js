import React from "react";
import styled from "styled-components";

const ArticleStyles = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #cfd2da;
  }

  h1,
  h2 {
    border-bottom: 1px solid #fff;
    margin: 2rem 0 1rem;
    padding-bottom: 0.5rem;
  }

  a {
    text-shadow: none;
    background-image: none;
    color: #fe7f2d;
    &:hover {
      color: #e71d36;
      text-decoration: underline;
    }
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

  video {
    width: 100%;
    max-width: 728px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;

const MarkdownBody = props => <ArticleStyles {...props} />;

export default MarkdownBody;
