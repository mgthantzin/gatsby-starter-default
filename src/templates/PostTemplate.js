import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import he from "he"

const PostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <h4 class="post-title">{he.decode(data.wordpressPost.title)}</h4>
    <span class="code aligncenter"><small>{data.wordpressPost.date}</small></span>
    <div class="divider"></div>  
    <article 
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
    />
    <div class="divider"></div>
  </Layout>
)
export default PostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
    }
  }
`
