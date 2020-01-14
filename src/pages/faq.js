import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import '../components/mystyles.scss'
import FAQMenu from '../components/faq-menu'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {
  const faqData = useStaticQuery(graphql`
  {
    allFaqJson {
      edges {
        node {
          id
          question
          answer
        }
      }
    }
  }
  
  `)
  return (
    <>
    <Layout>
      <section className="section">
      <h1 className="title">Frequently Asked Questions</h1>
        <p className="content"> 
          Below is a collection of frequently asked questions we receive. 
          In the off chance you cannot find the answer to your question below, 
          feel free to call us at (704) 910-4818 M-F 8am to 5pm.
        </p>
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-four-fifths">
              { faqData.allFaqJson.edges.map(faq => (
                <FAQMenu 
                  key={faq.node.id} 
                  questions={faq.node.question} 
                  answers={faq.node.answer}
                />
              )) }
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  )
}