import React from 'react'
import '../components/mystyles.scss'
import { Link } from 'gatsby'
import Logo from '../components/logo'
import TwitterSvg from './svg/twittersvg'
import InstagramSvg from './svg/instagramsvg'
import FbSvg from './svg/facebooksvg'

const Footer = ({ title }) => {
  return (
    <>
      <div className="footer">
        <div className="columns">
          <div className="column has-text-centered is-3">
            <Logo />
          </div>
        <div 
          className="column has-text-centered is-3"
          style={{ padding: `12px`}}
          >
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
          <p 
            style={{ 
              marginBottom: `.9em`,
              color: `grey`
            }}
          >
            Visit us on social media!
          </p>
          <ul className="social-links">
            <Link className="social-links-item">
              <TwitterSvg />
            </Link>
            <Link className="social-links-item">
              <FbSvg />
            </Link>
            <Link className="social-links-item">
              <InstagramSvg />
            </Link>
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