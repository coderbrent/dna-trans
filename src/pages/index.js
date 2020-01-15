import React from "react"
import SEO from "../components/seo"
import Layout from '../components/layout'
import Navbar from '../components/Navbar'
import HomeBanner from '../components/page-banners/HomeBanner'
import Card from '../components/card/Card'
import { useStaticQuery, graphql, Link } from 'gatsby'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allHomeJson {
      edges {
        node {
          nodeID
          nodeName
          nodeContent
        }
      }
    }
  }
  `)

  return (
    <>
    <Navbar />
    <HomeBanner />
    <Layout>
    <SEO title="Home" />
    <section className="section">
      <h1 className="title">
        { data.allHomeJson.edges[1].node.nodeContent }
      </h1>
      <p className="subtitle" style={{ marginLeft: '5px'}}>
        { data.allHomeJson.edges[2].node.nodeContent }
      </p>
        <p className="content" style={{ marginLeft: '5px'}}>
          { data.allHomeJson.edges[0].node.nodeContent }
        </p>
        <button 
          type="button" 
          className="button is-success" 
          style={{ 
            marginRight: '10px'
          }}
        >
          Get A Quote
        </button>
        <button type="button" className="button is-info">
          <Link className="has-text-white" to="/faq">Frequently Asked Questions</Link>
        </button>
    </section>
    <section className="section">
      <div className="container is-fluid">
        <div className="columns is-centered">
          <div className="column">
            <Card
              fluid={data.allImageSharp.edges[5].node.fluid}
              title={ data.allHomeJson.edges[3].node.nodeContent }
              subTitle={ data.allHomeJson.edges[4].node.nodeContent }
              content={ data.allHomeJson.edges[5].node.nodeContent }
            />
          </div>
          <div className="column">
            <Card 
              fluid={data.allImageSharp.edges[6].node.fluid} 
              title={ data.allHomeJson.edges[6].node.nodeContent }
              subTitle={ data.allHomeJson.edges[7].node.nodeContent }
              content={ data.allHomeJson.edges[8].node.nodeContent }
            />
          </div>
          <div className="column">
            <Card 
              fluid={data.allImageSharp.edges[7].node.fluid} 
              title={ data.allHomeJson.edges[9].node.nodeContent }
              subTitle={ data.allHomeJson.edges[10].node.nodeContent }
              content={ data.allHomeJson.edges[11].node.nodeContent }
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
  </>
  )
}

export default IndexPage;

