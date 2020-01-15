import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 225) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Link to="/"><Img fixed={data.placeholderImage.childImageSharp.fixed} /></Link>
}

export default Logo
