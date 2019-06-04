import React from 'react'
import style from './_card.module.scss'

function Card({id, clickHandler, displayed}) {
  return (
    <div className={`${style.card} ${(!displayed) ? style.hidden : ''}`}>
      <div className={`${style.cardContent} ${(displayed) ? style.shown : ''}`} onClick={() => clickHandler(id)}>
        Card {id}
      </div>
    </div>
  )
}

export default Card