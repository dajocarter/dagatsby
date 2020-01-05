const path = require("path");
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("./src/templates/page.js");
    const singleTemplate = path.resolve("./src/templates/single.js");

    resolve(
      graphql(`
        {
          pages: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "/**/*/src/pages/**/*.md" } }
          ) {
            edges {
              node {
                frontmatter {
                  slug
                  draft
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
                  draft
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
                  draft
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
          if (!node.frontmatter.draft) {
            createPage({
              path: `/${node.frontmatter.slug}/`,
              component: pageTemplate,
              context: {
                slug: node.frontmatter.slug
              }
            });
          }
        });

        result.data.posts.edges.forEach(({ node }) => {
          if (!node.frontmatter.draft) {
            createPage({
              path: `/posts/${node.frontmatter.slug}/`,
              component: singleTemplate,
              context: {
                slug: node.frontmatter.slug
              }
            });
          }
        });

        result.data.projects.edges.forEach(({ node }) => {
          if (!node.frontmatter.draft) {
            createPage({
              path: `/projects/${node.frontmatter.slug}/`,
              component: singleTemplate,
              context: {
                slug: node.frontmatter.slug
              }
            });
          }
        });
      })
    );
  });
};
