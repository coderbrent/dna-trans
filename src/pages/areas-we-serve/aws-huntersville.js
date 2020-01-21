import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import AboutBanner from '../../components/page-banners/AboutBanner'
import Navbar from '../../components/Navbar'
import Layout from '../../components/layout'

export default () => {
  const data = useStaticQuery(graphql` {
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
              Huntersville NC Trucking Company
            </h1>
            <h6 style={{ padding: `0em .35rem`}}>Huntersville NC trucking company specializing in expedited freight, over the road shipping, box truck shipping and hot shot trucking.</h6>
            <p className="content" style={{ padding: `.25rem`}}>
              We at DNA Transportation know and understand what it takes to get your product to their destination.  We have grown our operation making sure we, as owners, have a hand in the day to day operation of our trucking organization and your cargo.
              There is no mystery the proper relationship with a trucking company in Huntersville NC is imperative to the success of countless projects.  
              In this relationship we will discuss all of the crucial components of your needs:
            </p>
            <ul style={{ margin: `1rem 2rem`}}>
              <li style={{ listStyleType: 'disc'}}>Proper handling of your products</li>
              <li style={{ listStyleType: 'disc'}}>Accurate Pickup/Dropoff</li>
              <li style={{ listStyleType: 'disc'}}>Special Instructions</li>
              <li style={{ listStyleType: 'disc'}}>Open Lines of Communication</li>
            </ul>
            <button type="button" className="button is-medium is-success is-dark">Frequently Asked Questions</button>
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