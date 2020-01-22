const path = require('path')

exports.createPages = async function({ actions, graphql, reporter }) {
  const { createPage } = actions
  const siloPageTemplate = path.resolve(`src/templates/silo-page.js`)
  const result = await graphql(`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
  `)
  if(result.errors) {
    reporter.panicOnBuild(`Error running gql query`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: siloPageTemplate,
      context: {},
    })
  })
}