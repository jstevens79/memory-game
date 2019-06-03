import React from 'react'

function Card({id, clickHandler}) {
  return <div className="card" onClick={() => clickHandler(id)}>Card {id}</div>
}

export default Card