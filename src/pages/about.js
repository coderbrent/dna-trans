import React, { useEffect } from "react"
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

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

useEffect(() => console.log(data))

  return (
  <Layout>
    <div className="section padding-medium">
      <div className="columns">
      <div className="column">
      <h1 className="title">
        About Us
      </h1>
      <p className="content">
        DNA Transportation is a company which hold ourselves to the highest of standards at competitive rates. 
        DNA Transportation has been providing box trucks as well as Class A trucks for many years.  Customers know their freight is in the good hands of experienced and knowledgeable truck drivers send by DNA Transportation.  With our qualified and trained drivers having tons of experience, you can rest assured your materials will be in good hands to your full satisfaction.
      </p>
      </div>
      <div className="column">
      <Img
        fluid={ data.file.childImageSharp.fluid } 
        alt="inside a trucking depot"
      />
    </div>
    </div>
    </div>
    <div className="container">
      <div className="columns is-centered">
      </div>
    </div>
  </Layout>
  )
}