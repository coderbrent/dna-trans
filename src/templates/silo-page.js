import React from 'react'
import { graphql } from 'gatsby'
import Navbar from '../components/Navbar'
import Layout from '../components/layout'
import AboutBanner from '../components/page-banners/AboutBanner';

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
    <Navbar />
    <AboutBanner title={frontmatter.title}/>
    <Layout>
      <div className="section">
      <div className="content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      </div>
    </Layout>
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`