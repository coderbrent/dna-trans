import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import '../mystyles.scss'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "parked-trucks-under-clouds-charlote-nc-trucking.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 3200) {
              ...GatsbyImageSharpFluid
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
                  Price Quote
                </div>
                <div className="sub-title">
                  Fill Out The Form For A Free Quote on Shipping
                </div>
              </div>
            </div>
          </BackgroundImage>
        </>
      )
    }}
  />
)

const QuoteBanner = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: center;
`
export default QuoteBanner