import React from 'react'
import '../components/mystyles.scss'
import { Link } from 'gatsby'
import Logo from '../components/logo'

const Footer = ({ title }) => {
  return (
    <>
      <div className="footer">
        <div className="columns">
          <div className="column has-text-centered">
            <Logo />
          </div>
        <div className="column is-half">
            <p className="content gray">
              { title }
              <p>726 J Montana Drive, Charolette, NC 28216</p>
              <p>Phone: (704) 910-4818</p>
              DOT: 3085790
              MC: 69183
            </p>
        </div>
        <div className="column border-left">
          <div className="footer-links">
            <Link className="footer-items" to="/">Home</Link>
            <Link className="footer-items" to="/about">About</Link>
            <Link className="footer-items" to="/contact">Contact</Link>
            <Link className="footer-items" to="/apply">Apply</Link>
            <Link className="footer-items" to="/faq">FAQ</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer;