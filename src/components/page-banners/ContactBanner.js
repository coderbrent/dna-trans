import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import '../mystyles.scss'

const BackgroundSection = ({ className, title = "Contact Us" }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "white-dump-truck-near-pine-tress-during-daytime-93398.jpg" }) {
          childImageSharp {
            fluid(quality: 50, maxWidth: 3200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            heading={title}
          >
            <div className="container is-fluid">
              <div className="display">
                <div className="display-title">
                  { title }
                </div>
                <div className="sub-title">
                  By Phone, E-Mail or The Form Below!
                </div>
                <Link to='/quote'>
                  <button 
                    style={{ 
                      margin: `1em`
                    }} 
                    type="button" 
                    className="is-medium button is-dark is-success"
                  >
                    Get A Fast & Free Quote
                  </button>
                </Link>
              </div>
            </div>
          </BackgroundImage>
        </>
      )
    }}
  />
)

const ContactBanner = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: center;
`
export default ContactBanner;