import React from 'react';
import classes from '../card/Card.module.css'

const Card = ({ title, content }) => {
  return (
    <div className={classes.cardContainer}>
      <h3 className={classes.cardHeader}> 
        { title }
      </h3>
      <p className={classes.cardContent}>
        { content }
      </p>
      <button className={classes.cardButton}>Learn More</button>
    </div>
  )
}

export default Card;