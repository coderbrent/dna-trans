import React, { useState } from 'react'
import QuestionSvg from './svg/questionsvg'
import AnswerSvg from './svg/answersvg'
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

  return (
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
        <QuestionSvg className="spinningButton" />
      </div>
    </div>
    <div
      className={ 
        visible ? "answer notification is-success is-radiusless" 
        : "hidden" 
      }
      style={{ margin: `2px`}}
      onClick={toggleAnswer}
      onKeyDown={toggleAnswer}
      role="button"
      tabIndex="0"
    >
      <div className="answer">
        { answers }
        <AnswerSvg style={{ margin: `0em -1em`}}/>
      </div>
    </div>
    </>
  )
}

export default FAQMenu;