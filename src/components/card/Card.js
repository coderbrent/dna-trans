import React from 'react';
import classes from '../card/Card.module.css'

const Card = ({ title, content, image }) => {

  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageCap}> 
        <img src={image} />
      </div>
      <h3 className={classes.cardHeader}> 
        { title }
      </h3>
      <p className={classes.cardContent}>
        { content }
      </p>
    </div>
  )
}

export default Card;