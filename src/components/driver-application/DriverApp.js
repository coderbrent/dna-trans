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
      
    <input type="hidden" name="application" value="application"/>
      
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input 
            className="input" 
            type="text" 
            placeholder="Your Full Name" 
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input 
            className="input" 
            type="email"
            placeholder="Your E-mail Address"
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Your Current CDL Type</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Class A</option>
              <option>Class B</option>
              <option>No CDL</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">How many years of professional truck driving experience do you have?</label>
        <div className="control">
          <div className="select">
            <select>
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

    <div class="field">
    <div class="control">
    <label className="label">Are you legally authorized to work in the United States?</label>
    <label class="radio">
      <input type="radio" name="question"/>
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question"/>
      No
    </label>
    </div>
    </div>

      <div className="field is-grouped">
        <div className="control">
        <label className="label">Upload Your Resume...</label>
          <div class="file">
            <input class="file" type="file" name="resume" accept=".pdf, .docx, .doc"/>
          </div>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>

    </form>
    </div>
  </>
  )
}

export default DriverApp;