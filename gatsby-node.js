/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/post.js")
  const NewsTemplate = path.resolve("./src/templates/news-post.js")
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressWpNews {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }

    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
    const BlogPosts = result.data.allWordpressPost.edges
        BlogPosts.forEach(post => {
          createPage({
                path: post.node.slug,
                component: BlogPostTemplate,
                context: {
                id: post.node.wordpress_id,
                },
            })
        })
    const NewsPosts = result.data.allWordpressWpNews.edges
        NewsPosts.forEach(project => {
            createPage({
                path: `/news_post/${project.node.slug}`,
                component: NewsTemplate,
                context: {
                id: project.node.wordpress_id,
                },
            })
        })
}