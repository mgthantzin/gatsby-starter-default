import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ marginBottom: 50 }}>
      <h1>Hello, I'm <span style={{ color: '#428bca' }}>Thant</span>!</h1>
      <ul>
        <li>a software developer from Vancouver</li>
        <li>11 years of .Net development experience</li>
        <li>originally from Myanmar</li>
        <li>moved to Singapore to study when I was 17</li>
        <li>worked in Singapore for 11 years before migrating to Canada</li>
      </ul>
      <p>Check out my <Link to="/blog/">blog posts</Link>. I write mostly in Burmese. This website has tracking enabled for minimal analytics. Please refer to <Link to="/privacy/">Privacy Policy</Link>.</p>
    </div>
  </Layout>
)

export default IndexPage
