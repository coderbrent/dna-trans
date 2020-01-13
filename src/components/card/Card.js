import React from 'react';
import '../mystyles.scss'
import Img from 'gatsby-image'

const Card = ({ title, content, subTitle, fluid }) => { 

  return (
    <>
    <div style={{ margin: '.5rem'}}>
    <div className="card">
    <div className="card-image">
      <figure className="image is-180x180">
          <Img fluid={fluid} alt="Placeholder image"/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{ title }</p>
          <p className="subtitle is-6">{ subTitle }</p>
        </div>
      </div>
      <div className="content">
        { content }
      </div>
        <button className="button is-success">Learn More</button>
      </div>
    </div>
  </div>
  </>
  )
}

export default Card;