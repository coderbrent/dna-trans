import React from 'react';
import '../components/mystyles.scss'

const QuoteForm = () => {
  return (
    <>
      <form 
        name="quote" 
        method="POST" 
        data-netlify-honeypot="bot-field"
        netlify={true}
      >
      <input 
        type="hidden"
        name="quote"
        value="quote"
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
      <div className="field">
        <label htmlFor="name" className="label">
          Phone Number
        </label>
        <div className="control">
          <input
            id="phone"
            className="input"
            type="tel"
            placeholder="(800) 867-5309"
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="name" className="label">
          Company Name
        </label>
        <div className="control">
          <input
            id="company_name"
            className="input"
            type="text"
            placeholder="Vandelay Industries"
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="name" className="label">
          Company Name
        </label>
        <div class="control">
          <input
            id="company_name"
            className="input"
            type="text"
            placeholder="Vandelay Industries"
            required
          />
        </div>
      </div>
      </div>
      </div>
      <div class="control">
        <button 
          className="button is-success"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
   </>
  )
}

export default QuoteForm