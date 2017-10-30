const path = require("path");
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("./src/templates/page.js");
    const postTemplate = path.resolve("./src/templates/post.js");
    const projectTemplate = path.resolve("./src/templates/project.js");

    resolve(
      graphql(`
        {
          pages: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "/**/*/src/content/*.md" } }
          ) {
            edges {
              node {
                frontmatter {
                  slug
                }
              }
            }
          }
          posts: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "/**/*/src/posts/**/*.md" } }
          ) {
            edges {
              node {
                frontmatter {
                  slug
                }
              }
            }
          }
          projects: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "/**/*/src/projects/**/*.md" } }
          ) {
            edges {
              node {
                frontmatter {
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        result.data.pages.edges.forEach(({ node }) => {
          createPage({
            path: `/${node.frontmatter.slug}/`,
            component: pageTemplate,
            context: {
              slug: node.frontmatter.slug
            }
          });
        });

        result.data.posts.edges.forEach(({ node }) => {
          createPage({
            path: `/posts/${node.frontmatter.slug}/`,
            component: postTemplate,
            context: {
              slug: node.frontmatter.slug
            }
          });
        });

        result.data.projects.edges.forEach(({ node }) => {
          createPage({
            path: `/projects/${node.frontmatter.slug}/`,
            component: projectTemplate,
            context: {
              slug: node.frontmatter.slug
            }
          });
        });
      })
    );
  });
};
