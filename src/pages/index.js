import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import he from "he"

const IndexPage = ({ data }) => {
  const posts = data.allWordpressPost.edges.filter(
      p => p.node.date !== null
  )

  const postsList = posts =>
    posts.map(post => (
      <li key={post.node.wordpress_id}>
        <div className="post-date code">
          <small>{post.node.date}</small>
        </div>
        <div className="title">
          <Link to={decodeURI(`/posts/${post.node.slug}/`)}>{he.decode(post.node.title)}</Link>
        </div>
      </li>
    ))

  return(<Layout>
    <SEO title="Home" />
    <div style={{ marginBottom: 50 }}>
      <h1>Hello, I'm <span style={{ color: '#005D8F' }}>Thant</span>!</h1>
      <ul>
        <li>a software developer from Vancouver</li>
        <li>11 years of .Net development experience</li>
        <li>originally from Myanmar</li>
        <li>moved to Singapore to study when I was 17</li>
        <li>worked in Singapore for 11 years before migrating to Canada</li>
      </ul>
      <p>Check out my <Link to="/blog/">blog posts</Link>. I write mostly in Burmese. Sometimes, I also share articles that I find interesting. This website has tracking enabled for minimal analytics. Please refer to <Link to="/privacy/">Privacy Policy</Link>.</p>
      <p>
         Recently, I wrote<br />
         {postsList(posts)}
      </p>
    </div>
  </Layout>)

}

export default IndexPage

export const query = graphql`
 {
    allWordpressPost(filter: {status: {eq: "publish"}}, sort: {order: DESC, fields: [date]}, limit: 5) {
          edges {
              node {
                  date
                  title
                  slug
              }
          }
      }
  }
`
