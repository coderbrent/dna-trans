import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../components/logo'

const ListLink = props => (
  <li style={{ display: `inline-flex`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <>
  <div style={{ display: `grid`, alignItems: `center`, gridTemplateColumns: `1fr 6fr` }}>
  <div style={{ maxWidth: '225px' }}>
    <Logo />
  </div>
  <header
    style={{
      display: `block`,
      background: `white`,
      alignContent: `center`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 3200,
        padding: `1.75rem 1.0875rem`,
      }}
    >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `darkred`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>
            1-800-DNA-TRANS
          </h3>
        </Link>
        <ul style={{ 
          listStyle: `none`, 
          float: `right`, 
          fontFamily: `Roboto`, 
          fontSize: `larger`,
          fontWeight: 'bold',
          padding: `0 .75rem`,
        }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/contact/">Testimonials</ListLink>
        </ul>
    </div>
  </header>
  </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
