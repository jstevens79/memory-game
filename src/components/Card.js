import React from 'react'
import style from './_card.module.scss'

function Card({data, clickHandler, displayed, currentClicked}) {

  const cardClass = () => {
    const display = (!displayed) ? style.hidden : ''
    return `${style.card} ${display}`
  }

  const clickClass = () => {
    const display = (displayed) ? style.shown : ''
    const correct = ((currentClicked.current === data.id) && currentClicked.correct) ? style.correct : ''
    const incorrect = ((currentClicked.current === data.id) && !currentClicked.correct) ? style.incorrect : ''
    return `${style.cardContent} ${display} ${correct} ${incorrect}`
  }

  return (
    <div className={cardClass()}>
      <div
        className={clickClass()}
        onClick={() => clickHandler(data.id)}>
        <img src={`img/${data.img}`} alt={data.alt}></img>
      </div>
    </div>
  )
}

export default Card