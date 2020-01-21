import React, { useState } from "react"
import Layout from "../components/layout"
import AboutBanner from "../components/page-banners/AboutBanner";
import Navbar from "../components/Navbar";

export default () => {
  const [ visible, setVisible ] = useState(false)

  const handleMessage = event => {
    event.preventDefault();
    console.log('swhing!')
    setVisible(true)
  }

  return (
  <>
  <Navbar />
  <AboutBanner />
    <Layout>
      <div className="section">
        <h1 className="title">
          Contact Us
        </h1>
          {/* { visible ? <div className="box">Your message was sent!</div> : null } */}
          <form method="post"
            name="contact"
            netlify-honeypot="bot-field"
            netlify
            action="/success"
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
              <input type="submit" onSubmit={handleMessage} className="button is-success" />
            </div>
          </form>

      </div>
    </Layout>
  </>
)
}