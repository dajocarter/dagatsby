const path = require("path");
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("./src/templates/post.js");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: `/posts/${node.frontmatter.slug}`,
            component: postTemplate,
            context: {
              slug: node.frontmatter.slug
            }
          });
        });
      })
    );
  });
};
