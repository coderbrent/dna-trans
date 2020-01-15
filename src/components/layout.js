import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import '../components/mystyles.scss'
import Footer from '../components/footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px auto`,
          paddingTop: 0,
        }}
      >
        <div>{children}</div>
      </div>
      <Footer title={data.site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
