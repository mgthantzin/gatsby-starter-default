import React from "react"
import { graphql, Link } from "gatsby"
//import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { groupBy, getDateYear } from "../utils"
import he from "he"

const IndexPage = ({ data }) => {

  const posts = data.allWordpressPost.edges.filter(
    p => p.node.date !== null
  )

  const postsList = posts =>
    posts.map(post => (
      <li key={post.node.wordpress_id}>
        <div className="post-date code">
          <small>{post.node.date.substring(0, 6)}</small>
        </div>
        <div className="title">
          <Link to={decodeURI(`/posts/${post.node.slug}`)}>{he.decode(post.node.title)}</Link>
        </div>
      </li>
    ))

  const postsListContainer = groupBy(posts, getDateYear)
    .map(({ year, posts }, i) => (
      <div key={i}>
        <h4 className="code">{year}</h4>
        {postsList(posts)}
        <div class="divider"></div>
      </div>
    ))
    .reverse()

return ( 
  <Layout>
    <SEO title="Home" />
    <section className="postlist">
      <ul>{postsListContainer}</ul>
    </section>
  </Layout>
)
      }

export default IndexPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
            wordpress_id  
            title
            slug
            date(formatString: "MMM DD YYYY")
          }
        }
      }
    }
`
