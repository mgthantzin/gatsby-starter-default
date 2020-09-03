import React from "react"
import { Link, graphql } from "gatsby"
//import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import he from "he"

const post = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={html.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/<[^>]*>/g, '').substring(0,99)}
      />
      <h4 class="heading">{he.decode(frontmatter.title)}</h4>
      <span class="code aligncenter"><small>{frontmatter.date}</small></span>
      <div class="divider"></div>  
      <article 
        style={{ marginTop: 20 }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div class="divider"></div>
      <h4 class="heading">
      <Link to="/blog/" title="Back to Blog">
        &larr;{" "}Back
      </Link></h4>
      <div class="divider"></div>
    </Layout>
  )
}
export default post

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`