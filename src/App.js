import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import styles from './styles/index.module.scss'

import {TransportationImages} from './TransportationImages'

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [cards, setCards] = useState([])
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const [displayed, setDisplayed] = useState(false)

  const shuffle = arr => {
    const Shuffled = arr.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
    return Shuffled
    
  }

  // shuffle for the initial render
  // new way of handling componentDidMount
  useEffect(() => {
    setCards(shuffle(TransportationImages))
    setDisplayed(true)
  }, [])

  // handle wins & losses
  useEffect(() => {
    if (score === TransportationImages.length) {
      console.log('you won!')
    }

    if (score === 0 && gameStarted) {
      console.log('loser')
    }
  }, [score, gameStarted])

  
  const animationTimer = () => {
    setDisplayed(false)
    setTimeout(() => {
      setCards(shuffle(TransportationImages))
      setTimeout(() => {
        setDisplayed(true)
      }, 100)
    }, 400)
  }


  const clickHandler = num => {
    setGameStarted(true)
    if (!clicked.includes(num)) {
      setScore(score + 1)
      if ((score + 1) > topScore) setTopScore(score + 1)
      setClicked([...clicked, num])
      animationTimer()
    } else {
      setScore(0)
      setClicked([])
      animationTimer()
    }
  }

  return (
      <div className={styles.appContainer}>
      <div className={styles.title}>Memory Test</div>
      <div className={styles.cardContainer}>
        {cards.map(card => {
          return (
            <Card
              key={`card${card.id}`}
              data={card}
              displayed={displayed}
              clickHandler={clickHandler}
            />
          )
        })}
      </div>
      <div className={styles.scoreContainer}>
        <span className={styles.score}>Score: {score}</span>
        {!gameStarted &&
          <span className={styles.message}>Click an image to get started!</span>
        }
        <span className={styles.topScore}>Top Score: {topScore}</span>
      </div>
    </div>    
  );
}

export default App
