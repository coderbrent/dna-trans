import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import '../components/mystyles.scss'
import FAQMenu from '../components/faq-menu'

export default () => {
  return (
    <>
    <Layout>
      <h1 className="title">Frequently Asked Questions</h1>
      <FAQMenu />
    </Layout>
    </>
  )
}