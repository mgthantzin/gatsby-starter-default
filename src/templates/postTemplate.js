import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
//import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import he from "he"

const postTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/<[^>]*>/g, '').substring(0,199)}
    />
    <h4 class="post-title">{he.decode(data.wordpressPost.title)}</h4>
    <span class="code aligncenter"><small>{data.wordpressPost.date}</small></span>
    <div class="divider"></div>  
    <article 
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
    />
    <div class="divider"></div>
    <h4 class="post-title">
    <Link to="/blog/" title="Back to Blog">
      &larr;{" "}Back
    </Link></h4>
    <div class="divider"></div>
  </Layout>
)
export default postTemplate

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
