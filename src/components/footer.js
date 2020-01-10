import React from 'react'
import '../components/mystyles.scss'

const Footer = ({ title }) => {
  return (
    <>
      <div className="footer">
        { title }
        <p> Footer fields like social media links and other items will go down here...</p>
      </div>
    </>
  )
}

export default Footer;