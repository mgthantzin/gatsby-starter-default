import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy" />
    <div style={{ marginBottom: 50 }}>
      <h1>Privacy Policy</h1>
      <p>Different online tools aer being tested for analytics. This page will be updated later.</p>
      <h4 class="heading">
        <Link to="/blog/" title="Back to Blog">
            &larr;{" "}Back
        </Link>
      </h4>
    </div>
  </Layout>
)

export default PrivacyPage
