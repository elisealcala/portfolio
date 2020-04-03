const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allMdx(limit: $limit) {
          edges {
            node {
              id
              body
              frontmatter {
                slug
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
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMdx.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `${edge.node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          slug: `${edge.node.fields.slug}`,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
