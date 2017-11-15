import React from "react";
import Helmet from "react-helmet";

const Project = ({ data }) => (
  <div className="content">
    <Helmet
      title={`${data.markdownRemark.frontmatter.title} | ${data.site
        .siteMetadata.title}`}
    />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <p>{data.markdownRemark.frontmatter.date}</p>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </div>
);

export default Project;

export const pageQuery = graphql`
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
