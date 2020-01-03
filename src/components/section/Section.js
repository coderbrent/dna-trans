import React from 'react';
import classes from '../section/Section.module.css'
import Card from '../card/Card'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Section = () => {

const Image = () => {
  const truck = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "truck.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
    return <Img fixed={truck.placeholderImage.childImageSharp.fixed} alt="image of a large truck"/>
  }

  return (
    <>
    <h1 className={classes.heading}> 
        What We Do. 
      </h1>
      <div className={classes.container}>
        <div>
        <Image />
        <Card
          title={'Hot Shot Trucking'}
          content={'Blah bla bla blah'}
        />
        </div>
        <div>
        <Image />
        <Card
          title={'18 Wheelers'}
          content={'Blah bla bla blah'}
        />
        </div>
        <div>
        <Image />
        <Card
          title={'Expedited Shippingz'}
          content={'Blah bla bla blah'}
        />
      </div>
      </div>
    </>
  )
}


export default Section;