import { useState } from 'react'

const Button = ({text, onClick}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const DisplayHighest = ({votes, anecdotes}) => {
  const [largestNum, setlargestNum] = useState(0)
  const [mostVoted, setmostVoted] = useState(0)
  
  let i = 0
  votes.forEach((voteValue) => {
    if (voteValue > largestNum) {
      setlargestNum(voteValue)
      setmostVoted(i)
    }
    i += 1
  })
  
  if (largestNum === 0) {
    return (
      <br/>
    )
  }
  return (
    <div>
      {anecdotes[mostVoted]}
      <br />
      has {largestNum} votes
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const handleClick = () => {
    const randomizeSelected = (listSize) => {
      const random = Math.floor(Math.random() * listSize)
      setSelected(random)
    }
    randomizeSelected(anecdotes.length)
  }

  const handleVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      has {votes[selected]} votes
      <br/>
      <Button 
        text="vote" 
        onClick={handleVote} 
      />
      <Button 
        text="next anecdote" 
        onClick={handleClick}
        />
      <h1>Anecdote with most votes</h1>
      <DisplayHighest 
        votes={votes} 
        anecdotes={anecdotes}
      />
    </div>
  )
}

export default App
