import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import '../mystyles.scss'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero-banner.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 3200) {
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
          >
            <div className="container is-fluid">
              <div className="display">
                <div className="display-title">
                  Top Quality Trucking Company in Charlotte NC For You
                </div>
                <div className="sub-title">
                  Expedited Shipping, Hot Shot Trucking, 18 Wheelers and More...
                </div>
                <Link to='/quote'><button style={{ margin: `1em`}} type="button" className="is-medium button is-dark is-success">Get A Fast & Free Quote</button></Link>
              </div>
            </div>
          </BackgroundImage>
        </>
      )
    }}
  />
)

const HomeBanner = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: center;
`
export default HomeBanner;