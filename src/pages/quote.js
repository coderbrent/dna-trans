import React from 'react'
import '../components/mystyles.scss'
import Navbar from '../components/Navbar'
import QuoteBanner from '../components/QuoteBanner'
import Footer from '../components/footer'

export default () => {
  return (
    <>
    <Navbar />
      <QuoteBanner />
        <section className="section">
          <h1 className="title">Get A Quote</h1>
            <div className="box"> Sweet Ass Quoting Form will go here </div>
        </section>
      <Footer />
    </>
  )
}