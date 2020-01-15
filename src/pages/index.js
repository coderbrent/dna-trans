import React from "react"
import SEO from "../components/seo"
import Layout from '../components/layout'
import InfoSection from '../components/info-section'
import Navbar from '../components/Navbar'
import HomeBanner from '../components/page-banners/HomeBanner'

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        description
      }
    }
}`

const IndexPage = () => (
  <>
  <Navbar />
  <HomeBanner />
  <Layout>
    <SEO title="Home" />
      <InfoSection />
  </Layout>
  </>
)

export default IndexPage;

