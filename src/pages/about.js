import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import AboutBanner from '../components/page-banners/AboutBanner'
import Navbar from '../components/Navbar'
import Layout from '../components/layout'

export default () => {
  const data = useStaticQuery(graphql`query MyQuery {
    file(relativePath: {eq: "building-business-ceiling-empty-trucking company charlotte nc.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
  <>
  <Navbar />
  <AboutBanner />
    <Layout>
      <section className="section">
        <div className="columns">
          <div className="column">
            <h1 className="title">
              About Us
            </h1>
            <p className="content">
              When we decided to open open our doors, we realized the need for a dependable transportation with the availability for clients to utilize modern technology to stay informed as to the status of their freight. DNA Transportation LLC is committed to utilizing all of the modern conveniences of technology to communicate the statuses of our loads. Providing trucking services in Charlotte NC is what we do best and hope to have the opportunity to have you experience the DNA Transportation difference."
            </p>
            <button type="button" className="button is-medium is-success is-dark">View Our Testimonials</button>
          </div>
          <div className="column">
            <Img
              fluid={ data.file.childImageSharp.fluid } 
              alt="inside a trucking depot"
            />
          </div>
        </div>
      </section>
    </Layout>
  </>
  )
}