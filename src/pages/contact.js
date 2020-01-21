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
          <form method="post"
            name="contact"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="bot-field" />
            <div className="field">
            <label className="label" htmlFor="name">Name</label>
              <div className="control" id="name">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Your Name" 
                />
              </div>
            </div>

            <div className="field">
            <label className="label" htmlFor="email">E-Mail</label>
              <div className="control" id="email">
                <input 
                  className="input" 
                  type="email" 
                  placeholder="E-Mail Address" 
                />
              </div>
            </div>

            <div className="field">
            <label className="label" htmlFor="message">Message</label>
              <div className="control">
                <textarea 
                  className="textarea" 
                  id="message" 
                  placeholder="Drop us a line!">
                </textarea>
              </div>
            </div>
            
            <div className="control">
              <button type="submit" className="button is-success">
                Submit
              </button>
            </div>
          </form>

      </div>
    </Layout>
  </>
)
}