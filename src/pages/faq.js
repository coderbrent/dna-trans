import React from 'react'
import Layout from '../components/layout'
import '../components/mystyles.scss'
import Navbar from '../components/Navbar'
import FAQMenu from '../components/faq-menu'
import FAQBanner from '../components/page-banners/FAQBanner'
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
    <Navbar />
    <FAQBanner />
    <Layout>
      <section className="section">
      <h1 className="title">Frequently Asked Questions</h1>
        <p className="content">
        Below is a collection of frequently asked questions we receive. In the off chance you cannot find the answer to your question below, feel free to call us at (704) 910-4818 M-F 8am to 5pm.
        </p>
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              { faqData.allFaqJson.edges.map(faq => (
                !faq.node.id === 0 ? "DERP" :
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