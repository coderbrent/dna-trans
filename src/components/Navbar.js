import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Logo from '../components/logo'
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
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand navbar-item has-text-white">
      <a
        role="button" 
        className={ !isActive ? "navbar-burger burger has-text-white is-active" : "navbar-burger burger has-text-white" }
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

        <Link to="/">
          <div className="navbar-item has-text-white">  
            Home
          </div>
        </Link>
        
        <Link to="/about">
          <div className="navbar-item has-text-white">  
            About
          </div>
        </Link>

        <Link to="/contact">
          <div className="navbar-item has-text-white">  
            Contact
          </div>
        </Link>

        <Link to="/apply">
          <div className="navbar-item has-text-white">  
            Apply
          </div>
        </Link>

        <Link to="/quote">
          <div className="navbar-item has-text-white">  
            Quote
          </div>
        </Link>
        </div>
      </div>

  </nav>

  </>
  )
}

export default Navbar;