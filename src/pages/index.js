import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import he from "he"
import Helmet from "react-helmet"

const IndexPage = ({ data }) => {
  const posts = data.allWordpressPost.edges.filter(
      p => p.node.date !== null
  )

const postsList = posts =>
  posts.map(post => (
    <li key={post.node.wordpress_id}>
        <Link to={decodeURI(`/posts/${post.node.slug}/`)}>{he.decode(post.node.title)}</Link> <i className="date">{post.node.date}</i>     
    </li>
  ))

  return(
  <Layout>
    <Helmet>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />
    </Helmet>
    <SEO title="Home" />
    <div style={{ marginBottom: 50 }}>
      <h1>Hello, I'm <span style={{ color: '#005D8F' }}>Thant</span>!</h1>
      <ul className="indexlist">
        <li><i class="em em-flag-ca" aria-label="Canada Flag"></i>.Net developer from Vancouver</li>
        <li><i class="em em-flag-mm" aria-label="Burma Flag"></i>Originally from Burma</li>
        <li><i class="em em-flag-sg" aria-label="Singapore Flag"></i>Studied and worked in Singapore</li>
        <li><i class="em em-computer" aria-label="Personal Computer"></i>Primarily .Net and a bit of the rest</li>
      </ul>
      <p>One of my hobbies is keeping a blog and I write mostly in Burmese. Sometimes, I also share articles that I find interesting.</p>
      <h2>Recent Blog Posts</h2>
      <ul className="indexlist">{postsList(posts)}</ul>      
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
