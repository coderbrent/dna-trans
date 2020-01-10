import React from "react"
import SEO from "../components/seo"
import Layout from '../components/layout'
import InfoSection from '../components/info-section'
import HeroImage from '../components/HeroImage'

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
  <Layout>
    <SEO title="Home" />
      <InfoSection />
  </Layout>
  </>
)

export default IndexPage;

