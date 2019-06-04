import React from 'react'
import style from './_card.module.scss'

function Card({data, clickHandler, displayed}) {
  return (
    <div className={`${style.card} ${(!displayed) ? style.hidden : ''}`}>
      <div
        className={`${style.cardContent} ${(displayed) ? style.shown : ''}`}
        onClick={() => clickHandler(data.id)}>
        <img src={`img/${data.img}`} alt={data.alt}></img>
      </div>
    </div>
  )
}

export default Card