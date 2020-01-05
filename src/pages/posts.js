import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Archive from "../templates/archive";

const Posts = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      site {
        siteMetadata {
          title
        }
      }
      posts: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { glob: "/**/*/src/posts/**/*.md" }
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
    <Layout>
      <Archive title={`All Posts`} items={data.posts.edges} prefix={`posts`} />
    </Layout>
  )
};

export default Posts;
