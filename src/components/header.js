import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import "./mystyles.scss"

const ListLink = props => (
  <li style={{ display: `inline-flex`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const HeaderWrapper = styled.div`
  background: darkred;
  color: white;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  maxWidth: 960px;
  padding: 1.75rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
  <>
  {/* <HeaderWrapper>
  <div style={{ maxWidth: '225px' }}>
    <Logo />
  </div>
    <h1 style={{ margin: 0 }}>
      { siteTitle } 
    </h1>
    <HeaderContainer>
    <Link to="/" style={{ textShadow: `none` }}>
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
          padding: `0.75rem`,
        }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/contact/">Testimonials</ListLink>
        </ul>
    </HeaderContainer>
  </HeaderWrapper> */}
  
</>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
