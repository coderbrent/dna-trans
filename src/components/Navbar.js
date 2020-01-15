import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './mystyles.scss'

const Navbar = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleNavMenu = () => {
    if(isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/"><Img fixed={data.placeholderImage.childImageSharp.fixed} /></Link>
        <a
          role="button" 
          className={ !isActive ? "navbar-burger burger is-active" : "navbar-burger burger" }
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleNavMenu}
        >
          <span aria-hidden="false"></span>
          <span aria-hidden="false"></span>
          <span aria-hidden="false"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className={ !isActive ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-start">
          <div className="navbar-item">  
            <Link className="has-text-weight-semibold has-text-dark" to="/">
              Home
            </Link>
          </div>
          <div className="navbar-item">  
            <Link className="has-text-weight-semibold has-text-dark" to="/about">
              About
            </Link>
          </div>
          <div className="navbar-item">  
            <Link className="has-text-weight-semibold has-text-dark" to="/contact">
              Contact
            </Link>
          </div>
          <div className="navbar-item">  
            <Link className="has-text-weight-semibold has-text-dark" to="/apply">
              Apply
            </Link>
          </div>
          <div className="navbar-item">  
            <Link className="has-text-weight-semibold has-text-dark" to="/quote">
              Quote
            </Link>
          </div>
          <div className="navbar-item">  
            <Link className="has-text-weight-semibold has-text-dark" to="/faq">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar;