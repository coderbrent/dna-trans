import React from "react"
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div>
      <h1>Apply To Drive</h1>
      <p>Use this form to apply for a driving position.</p>
        <form>
          <h3>Driver Application</h3>
          <label forHTML="firstname">First Name: <input name="firstname" type="text" /></label>
        </form>
    </div>
  </Layout>
)