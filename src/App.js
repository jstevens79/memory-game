import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import styles from './styles/index.module.scss'

const CardsArray = [1,2,3,4,5,6,7,8,9]

function App() {
  const [cards, setCards] = useState([])
  const [score, setScore] = useState(0)
  const [clicked, setClicked] = useState([])

  const shuffle = arr => {
    const Shuffled = arr.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
    return Shuffled
    
  }

  const clickHandler = num => {
    if (!clicked.includes(num)) {
      setScore(score + 1)
      const newClicked = [...clicked, num]
      setClicked(newClicked)
      setCards(shuffle(CardsArray))
    } else {
      setScore(0)
      setClicked([])
      setCards(shuffle(CardsArray))
    }
  }

  useEffect(() => {
    setCards(shuffle(CardsArray))
  }, [])


  return (
    <div className="App">
      <h1>Score: {score}</h1>
      <div className={styles.cardContainer}>
        {cards.map(card => {
          return <Card key={card} id={card} clickHandler={clickHandler} />
        })}
      </div>
    </div>
  );
}

export default App
