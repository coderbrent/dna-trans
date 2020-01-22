import React from 'react';
import '../components/mystyles.scss'

const QuoteForm = () => {
  return (
    <>
      <form 
        name="application" 
        method="POST" 
        data-netlify-honeypot="bot-field"
        netlify
      >
      {/* the hidden input tag is to leverage netlify's front end form handling feature  */}
      <input 
        type="hidden" 
        name="form-name" 
        value="application"
      />
        <div className="columns">
          <div className="column">
            <div className="field">
              <label htmlFor="name" className="label">
                Name
              </label>
              <div className="control">
                <input
                  id="name"
                  className="input" 
                  type="text" 
                  placeholder="Your Full Name"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="control">
                <input
                  id="email"
                  className="input" 
                  type="email"
                  placeholder="Your E-mail Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="column">

          </div>
        </div>
    </form>
    </>
  )
}

export default QuoteForm