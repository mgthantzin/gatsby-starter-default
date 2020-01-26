import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy" />
    <div style={{ marginBottom: 50 }}>
      <h1>Privacy Policy</h1>
      <p>This website does not collect any personal information. GoatTracker is used for analytics. Its privacy policy can be found <a href='https://www.goatcounter.com/privacy' target='_blank'>here</a>.</p>
      <h4 class="heading">
        <Link to="/blog/" title="Back to Blog">
            &larr;{" "}Back
        </Link>
      </h4>
    </div>
  </Layout>
)

export default PrivacyPage
