import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Logo from '../components/logo'
import './mystyles.scss'

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item has-text-white" to="/">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </Link>
      <a role="button" className="navbar-burger burger has-text-white" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item has-text-white" to="/">
          Home
        </Link>
        <Link className="navbar-item has-text-white" to="/about">
          About
        </Link>
        <Link className="navbar-item has-text-white" to="/contact" >
          Contact
        </Link>
        <Link className="navbar-item has-text-white" to="/apply" >
          Apply to Drive
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
        </div>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar;