import React from 'react'
import '../components/mystyles.scss'
import Navbar from '../components/Navbar'
import QuoteBanner from '../components/page-banners/QuoteBanner'
import Layout from '../components/layout'

export default () => {
  return (
    <>
    <Navbar />
      <QuoteBanner />
      <Layout>
        <section className="section">
          <h1 className="title">Get A Quote</h1>
            <div className="box"> Sweet Ass Quoting Form will go here </div>
        </section>
      </Layout>
    </>
  )
}