import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import HeroImage from './HeroImage'
import Navbar from '../components/Navbar'
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
    <Navbar />
      <HeroImage />
      <div style={{
          margin: `0 auto`,
          maxWidth: 1200,
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
