const path = require(`path`);
const fs = require('fs-extra');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onPostBuild = () => {
  console.log('Copying locales');
  fs.copySync(
    path.join(__dirname, '/src/locales'),
    path.join(__dirname, '/public/locales')
  );
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);
  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allMdx(limit: $limit) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    const posts = result.data.allMdx.edges.map((c) => c.node);
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];

      createPage({
        // Path for this page — required
        path: `${post.fields.slug}`,
        component: blogPostTemplate,
        context: {
          id: `${post.id}`,
          previous: previous,
          next: next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
