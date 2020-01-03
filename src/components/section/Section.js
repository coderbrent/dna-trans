import React from 'react';
import classes from '../section/Section.module.css'
import Card from '../card/Card'
import { graphql, useStaticQuery } from 'gatsby'

const Section = () => {

const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "hero-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)


  return (
    <>
      <div className={classes.container}>
      <h1 className={classes.heading}> 
        What We Do. 
      </h1>

        <Card
          image={data.placeholderImage.childImageSharp.fluid}
          title={'Hot Shot Trucking'}
          content={'Blah bla bla blah'}
        />
        <Card
          image={data.placeholderImage.childImageSharp.fluid}
          title={'18 Wheelers'}
          content={'Blah bla bla blah'}
        />
        <Card
          image={data.placeholderImage.childImageSharp.fluid}
          title={'Expedited Shippingz'}
          content={'Blah bla bla blah'}
        />

      </div>
    </>
  )
}


export default Section;