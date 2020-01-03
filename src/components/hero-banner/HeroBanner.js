import React from 'react';
import classes from '../hero-banner/heroBanner.module.css'
import QuotePanel from '../quote-panel/QuotePanel'

const HeroBanner = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.bannerDisplay}>
        <div>
          <QuotePanel />
        </div>
        <div>
        </div>
          <h1 className={classes.bigTitle}>
            Hot Shot Trucking. Expedited Shipping. World Class Service.
          </h1>
      </div>
    </div>
  )
}

export default HeroBanner;


