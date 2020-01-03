import React from 'react';
import classes from '../hero-banner/heroBanner.module.css'
import QuotePanel from '../quote-panel/QuotePanel'

const HeroBanner = () => {
  return (
    <div className={classes.bannerDisplay}>
      <div>
        <QuotePanel />
      </div>
      <div>
      </div>
      <h1 className={classes.bigTitle}>
        We Got Your Hot Shot Trucking Right Here.
      </h1>
    </div>
  )
}

export default HeroBanner;


