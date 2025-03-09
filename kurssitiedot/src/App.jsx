const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const parts = props.parts
  const exercises = props.exercises
  return (
    <div>
      <p>
        {parts[0]} {exercises[0]}
      </p>
      <p>
        {parts[1]} {exercises[1]}
      </p>
      <p>
        {parts[2]} {exercises[2]}
      </p>
    </div>
  )
}

const Total = (props) => {
  const ex1 = props.exercises[0]
  const ex2 = props.exercises[1]
  const ex3 = props.exercises[2]
  const total = ex1 + ex2 + ex3
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const ex1 = 10
  const part2 = 'Using props to pass data'
  const ex2 = 7
  const part3 = 'State of a component'
  const ex3 = 14

  const parts = [part1, part2, part3]
  const exercises = [ex1, ex2, ex3]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App
