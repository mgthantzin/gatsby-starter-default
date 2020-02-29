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
        <Link to={decodeURI(`/posts/${post.node.slug}/`)}>{he.decode(post.node.title)}</Link> <i>{post.node.date}</i>     
    </li>
  ))

  return(<Layout>
    <SEO title="Home" />
    <div style={{ marginBottom: 50 }}>
      <h1>Hello, I'm <span style={{ color: '#005D8F' }}>Thant</span>!</h1>
      <p>I'm a software developer from Vancouver. I was born in Myanmar (Burma). I moved to Singapore in 2005 to join an IT diploma program at Singapore Polytechnic. In 2008, I started working as a .Net developer. At the same time, I pursued a bachelor's degree program (offshore) in Business Information Systems from Deakin University (Australia). In 2019, I migrated to Canada.</p>
      <p>One of my hobbies is keeping a blog and I write mostly in Burmese. Sometimes, I also share articles that I find interesting.</p>
      <h2>Recent Blog Posts</h2>
      <ul className="recentlist">{postsList(posts)}</ul>      
      <Link to="/blog/" className="read-blog">Read my blog</Link>
      <div class="divider"></div>  
      <h4 id="note">Note</h4>  
      <p>This website has tracking enabled for minimal analytics. Please refer to <Link to="/privacy/">Privacy Policy</Link>.</p>
    </div>
  </Layout>)

}

export default IndexPage

export const query = graphql`
 {
    allWordpressPost(filter: {status: {eq: "publish"}}, sort: {order: DESC, fields: [date]}, limit: 5) {
          edges {
              node {
                  date(formatString: "DD MMM")
                  title
                  slug
              }
          }
      }
  }
`
