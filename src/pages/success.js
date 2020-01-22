import React from 'react'
import { Link } from 'gatsby'
import TruckSvg from '../components/svg/trucksvg'

export default() => {
  return (
    <section className="section" style={{ height: `100vh`}}>
      <div className="columns" style={{ height: `100%`, alignItems: `center`}}>
        <div className="column">
        </div>
        <div className="column is-9" style={{ textAlign: `center` }}>
        <h1 style={{ fontSize: `5rem`, color: `hsl(171, 100%, 41%)` }}>
          That's A Big 10-4!
        </h1>
          <TruckSvg />
          <p className="content">
            Your message is on it's way! We'll get back to you shortly!
          </p>
          <Link to="/">
            <button className="button is-primary is-dark" type="button">
              Back home
            </button>
          </Link>
        </div>
        <div className="column">
        </div>
      </div>
    </section>
  )
}

