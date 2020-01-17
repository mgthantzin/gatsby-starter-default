import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello, I'm Thant!</h1>
    <p>I'm a software developer from Vancouver. I have 11 years of .Net development experience. I am originally from Myanmar. I moved to Singapore to study when I was 17. I worked in Singapore for 11 years before migrating to Canada.</p>
    Check out my <Link to="/blog/">blog posts</Link>. I write mostly in Burmese.
  </Layout>
)

export default IndexPage
