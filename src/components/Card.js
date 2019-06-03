import React from 'react'
import style from './_card.module.scss'

function Card({id, clickHandler}) {
  return <div className={style.card} onClick={() => clickHandler(id)}>Card {id}</div>
}

export default Card