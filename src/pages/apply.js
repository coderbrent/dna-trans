import React from "react"
import Layout from '../components/layout'
import DriverApp from '../components/driver-application/DriverApp'

export default () => (

  <Layout>
    <div className="section padding-medium" style={{ marginBottom: `1em`}}>
      <h1 className="title">Apply To Drive</h1>
        <p className="tile notification is-message">
          Interested in driving for us? Fill out the application below and
          we will get back to you shortly!
        </p>
      <DriverApp />
    </div>
  </Layout>
)