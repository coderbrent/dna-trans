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
    <div className="box que" style={{ margin: `2px`}} onClick={toggleAnswer}>
      <div className="question">
        { questions }
      </div>
    </div>
    <div
      className={ visible ? "notification is-success" : "hidden" } 
      onClick={toggleAnswer}
      style={{ margin: `2px`}}
    >
      { answers }
    </div>
    </>
  )
}

export default FAQMenu;