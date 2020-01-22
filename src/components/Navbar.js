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
  {
    placeholderImage: file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        fixed(width: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
  `)

  return (
    <>
    <nav 
      className="navbar" 
      role="navigation" 
      aria-label="main navigation"
    >
      <div className="navbar-brand" style={{ alignItems: 'center'}}>
        <Link to="/">
          <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        </Link>
        <button
          style={{ border: 'none', backgroundColor: 'transparent'}}
          className={ !isActive ? "navbar-burger burger is-active" : "navbar-burger burger" }
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleNavMenu}
        >
          <span aria-hidden="false"></span>
          <span aria-hidden="false"></span>
          <span aria-hidden="false"></span>
        </button>
      </div>
    
      <div id="navbarBasicExample" className={ !isActive ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-start">
          <Link className="navbar-item has-text-weight-semibold has-text-dark" to="/">
            Home
          </Link>
          <Link className="navbar-item has-text-weight-semibold has-text-dark" to="/about">
            About
          </Link>
          <Link className="navbar-item has-text-weight-semibold has-text-dark" to="/contact">
            Contact
          </Link>
          <Link className="navbar-item has-text-weight-semibold has-text-dark" to="/apply">
            Apply
          </Link>
          <Link className="navbar-item has-text-weight-semibold has-text-dark" to="/quote">
            Quote
          </Link>
          <Link className="navbar-item has-text-weight-semibold has-text-dark" to="/faq">
            FAQ
          </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link has-text-weight-semibold has-text-dark" href="#">
            Areas We Service
          </a>
        <div className="navbar-dropdown">
          { data.allMarkdownRemark.edges.map((el, i) => (
            <Link
              key={i}
              className="navbar-item has-text-dark"
              to={`/${el.node.frontmatter.path}`}
            > 
              { el.node.frontmatter.path.replace(/["/"]/, '') }
            </Link>
          )) }
        </div>
        </div>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar;