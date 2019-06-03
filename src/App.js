import React, { useState } from 'react'
import Card from './components/Card'

function App() {
  const [cards, setCards] = useState([1,2,3,4,5])
  const [score, setScore] = useState(0)
  const [clicked, setClicked] = useState([])

  const clickHandler = num => {
    if (!clicked.includes(num)) {
      setScore(score + 1)
      const newClicked = [...clicked, num]
      setClicked(newClicked)
    } else {
      setScore(0)
      setClicked([])
    }
  }
  console.log(clicked)
  return (
    <div className="App">
      <h1>Score: {score}</h1>
      {cards.map(card => {
        return <Card key={card} id={card} clickHandler={clickHandler} />
      })}
    </div>
  );
}

export default App
