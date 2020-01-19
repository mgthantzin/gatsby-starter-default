/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Header from "./header"
import "./layout.css"
import "./custom.css"
import "./typography.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         avatar
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Helmet>
      <link rel="alternate" type="application/rss+xml" title="Thant Zin Oo's Blog Feed" href="https://thantzinoo.net/rss.xml" />
      </Helmet>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 500,
          padding: `0px 15px`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
