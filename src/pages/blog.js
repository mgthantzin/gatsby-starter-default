import React from "react"
import { graphql, Link } from "gatsby"
//import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { groupBy, getDateYear } from "../utils"
import he from "he"

const BlogPage = ({ data }) => {

  const posts = data.allMarkdownRemark.edges.filter(
    p => p.node.frontmatter.date !== null
  )

  const postsList = posts =>
    posts.map(post => (
      <li key={post.node.id}>
        <div>{post.node.frontmatter.date.substring(0, 6)}</div>
        <div>
          <Link to={decodeURI(`/${post.node.fields.slug}/`)}>{he.decode(post.node.frontmatter.title)}</Link>
        </div>
      </li>
    ))

  const postsListContainer = groupBy(posts, getDateYear)
    .map(({ year, posts }, i) => (
      <div key={i}>
        <h4>{year}</h4>
        <ul>
          {postsList(posts)}
        </ul>
        <div class="divider"></div>
      </div>
    ))
    .reverse()

return ( 
  <Layout>
    <SEO title="Blog" />
    <section className="postlist">
      {postsListContainer}
    </section>
  </Layout>
)
      }

export default BlogPage

export const query = graphql`
query {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMM DD YYYY")
          title
        }
      }
    }
  }
}
`