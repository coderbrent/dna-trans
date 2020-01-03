import React from 'react';
import classes from '../quote-panel/QuotePanel.module.css'

const QuotePanel = () => {
  return (
    <div className={classes.panel}>
      <div className={classes.header}>
       Free Shipping Quote!
      </div>
        <p className={classes.bodyText}>Fill out the form below and one of our support members will contact you shortly!</p>
        <form className={classes.form}>
          <label> First Name: <input type="text" className={classes.textInput} /></label>
          <label> Last Name: <input type="text" className={classes.textInput} /></label>
          <label> E-Mail: <input type="text" className={classes.textInput} /></label>
          <button type="button" className={classes.submitButton}>Submit</button>
        </form>
      </div>

  )
}

export default QuotePanel;