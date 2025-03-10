import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Header = ({header}) => {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const sum = () => {
    return (
      good + neutral + bad
    )
  }

  const computeAvg = () => {
    return (
      (good - bad)/sum()
    )
  }

  const computePositives = () => {
    return (
      good/sum()
    )
  }

  return (
    <div>
      good {good}
      <br />
      neutral {neutral}
      <br />
      bad {bad}
      <br />
      all {sum()}
      <br />
      average {computeAvg()}
      <br />
      positive {computePositives()}
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    return (
      setGood(newGood)
    )
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    return (
      setNeutral(newNeutral)
    )
  }

  const handleBad = () => {
    const newBad = bad + 1
    return (
      setBad(newBad)
    )
  }

  return (
    <div>
      <Header header="give feedback"/>
      <Button
        onClick={handleGood}
        text='good'
      />
      <Button
        onClick={handleNeutral}
        text='neutral'
      />     
      <Button
        onClick={handleBad}
        text='bad'
      />  
      <Header header="statistics"/>
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
      />
    </div>
  )
}

export default App
