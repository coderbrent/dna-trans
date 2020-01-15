import React from "react"
import Layout from "../components/layout"
import AboutBanner from "../components/page-banners/AboutBanner";
import Navbar from "../components/Navbar";

export default () => {
  return (
  <>
  <Navbar />
  <AboutBanner />
    <Layout>
      <div className="section">
        <h1 className="title">
          Contact Us
        </h1>
        <p className="content">
          <form>
            <div className="field">
            <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Your Name" />
              </div>
            </div>

            <div className="field">
            <label className="label">E-Mail</label>
              <div className="control">
                <input className="input" type="email" placeholder="E-Mail Address" />
              </div>
            </div>

            <div className="field">
            <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Drop us a line!"></textarea>
              </div>
            </div>
            
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </form>
        </p>
      </div>
    </Layout>
  </>
)
}