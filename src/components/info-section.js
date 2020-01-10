import React from 'react'
import '../components/mystyles.scss'
import Card from '../components/card/Card'
import { graphql, useStaticQuery } from 'gatsby'

const InfoSection = () => {
  const data = useStaticQuery(graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid(sizes: "600") {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  `)

  return (
    <>
    <section className="section">
      <h1 className="title">
        Trucking You Can Count On.
      </h1>
        <p className="content">If you are looking for an experienced, qualified, and licensed trucking company in Charlotte to take care of your logistic needs locally or interstate, you’ve come to the right place.  Large or small cargo, it’s best to hire a professional trucking company that has the ability to guarantee the safe delivery of your materials and freight.  We realize timely delivery of your expedited freight and materials helps to keep you projects and deadlines on target. </p>
        <button type="button" className="button is-success" style={{ marginRight: '10px'}}>Get A Quote</button>
        <button type="button" className="button is-info">Frequently Asked Questions</button>

    </section>
    <section className="section" style={{ margin: `0em 3em`}}>
    <div className="container">
      <div className="columns is-centered">
        <div className="column">
          <Card 
            fluid={data.allImageSharp.edges[5].node.fluid}
            title={'Experienced'}
            subTitle={'_blank amount of years in business'}
            content={'If you are looking for an experienced, qualified, and licensed trucking company in Charlotte to take care of your logistic needs locally or interstate, you’ve come to the right place.'}
          />
        </div>
        <div className="column">
          <Card 
            fluid={data.allImageSharp.edges[6].node.fluid} 
            title={'Cargo'}
            subTitle={'Large, Small, Expedited'}
            content={'Large or small cargo, it’s best to hire a professional trucking company that has the ability to guarantee the safe delivery of your materials and freight.'}
          />
        </div>
        <div className="column">
          <Card 
            fluid={data.allImageSharp.edges[7].node.fluid} 
            title={'Cargo'}
            subTitle={'Large, Small, Expedited'}
            content={'There are numerous trucking companies in Charlotte.  But not all of them are created equal.  Many Charlotte Trucking companies are skilled, but they lack the logistic expertise needed to anticipate, overcome, and work through any obstacle. That is where DNA Transportation comes in.'}
          />
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default InfoSection;