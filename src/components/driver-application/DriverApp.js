import React from 'react'
import '../mystyles.scss'

const DriverApp = () => {
  return (
  <>
  <div className="container is-fluid">
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

      <div className="field">
        <label htmlFor="cdlSelect" className="label">
          Your Current CDL Type
        </label>
        <div className="control">
          <div className="select">
            <select id="cdlSelect">
              <option>Class A</option>
              <option>Class B</option>
              <option>No CDL</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="expSelect" className="label">
          How many years of professional truck driving experience do you have?
        </label>
        <div className="control">
          <div className="select">
            <select id="expSelect">
              <option>> 6 mos.</option>
              <option selected>1-3</option>
              <option>3-6</option>
              <option>6-10</option>
              <option>10-15</option>
              <option>15 +</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label htmlFor="quesRadio1" className="label">
            Are you legally authorized to work in the United States?
          </label>
          <label className="radio">
            <input 
              id="quesRadio1"
              type="radio" 
              name="question"
            />
              Yes
          </label>
          <label htmlFor="quesRadio2" className="radio">
            <input
              id="quesRadio2"
              type="radio" 
              name="question"
            />
              No
          </label>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
        <label htmlFor="resume" className="label">
          Upload Your Resume...
        </label>
          <div class="notification is-danger">
            Accepts .pdf, .doc and .docx files <strong>only.</strong>
          </div>
          <div className="file">
            <input 
              id="resume"
              class="file" 
              type="file" 
              name="resume" 
              accept=".pdf, .docx, .doc"
            />
          </div>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-success is-large">
            Submit
          </button>
        </div>
      </div>

    </form>
  </div>
  </>
  )
}

export default DriverApp;