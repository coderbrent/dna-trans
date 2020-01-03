import React from "react"
import Header from '../components/header'
import SEO from "../components/seo"
import HeroBanner from '../components/hero-banner/HeroBanner'
import Section from '../components/section/Section'

const IndexPage = () => (
  <>
  <Header siteTitle="DNA Transportation LLC" />
  <HeroBanner />
    <SEO title="Home" />
      <div style={{ margin: `0 2rem` }}>
        <Section />
      </div>
  </>
)

export default IndexPage;

