import React, { useState } from 'react'
import '../components/mystyles.scss'

const FAQMenu = ({ answers, questions }) => {
  const [visible, setVisible] = useState(false)

  const toggleAnswer = () => {
    if(visible) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  return(
    <>
    <div 
      className="box que is-radiusless" 
      style={{ margin: `2px`}} 
      onClick={toggleAnswer}
      onKeyDown={toggleAnswer}
      role="button"
      tabIndex="0"
    >
      <div className="question">
        { questions }
      </div>
    </div>
    <div
      className={ visible ? "notification is-success is-radiusless" : "hidden" } 
      style={{ margin: `2px`}}
      onClick={toggleAnswer}
      onKeyDown={toggleAnswer}
      role="button"
      tabIndex="0"
    >
      { answers }
    </div>
    </>
  )
}

export default FAQMenu;