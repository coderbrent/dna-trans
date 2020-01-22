import React from 'react'
import '../components/mystyles.scss'
import { Link } from 'gatsby'
import Logo from '../components/logo'
import TwitterSvg from '../components/twittersvg'
import InstagramSvg from '../components/instagramsvg'
import FbSvg from '../components/facebooksvg'

const Footer = ({ title }) => {
  return (
    <>
      <div className="footer">
        <div className="columns">
          <div className="column has-text-centered is-3">
            <Logo />
          </div>
        <div className="column is-half has-text-centered is-3">
            <h1 className="gray">
              { title }
            </h1>
            <ul>
              <li className="gray">726J Montana Drive, Charolette, NC 28216</li>
              <li className="gray">Phone: (704) 266-3715</li>
              <li className="gray">DOT: 3085790</li>
              <li className="gray">MC: 69183</li>
            </ul>
        </div>
        <div className="column has-text-centered is-3">
          <ul className="social-links">
            <li className="social-links-item"><TwitterSvg /></li>
            <li className="social-links-item"><FbSvg /></li>
            <li className="social-links-item"><InstagramSvg /></li>
          </ul>
        </div>
        <div className="column has-text-centered is-3">
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