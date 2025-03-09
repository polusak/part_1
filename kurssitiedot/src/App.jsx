const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  const total = props.ex1 + props.ex2 + props.ex3
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

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={ex1} />
      <Content part={part2} exercises={ex2} />
      <Content part={part3} exercises={ex3} />
      <Total ex1={ex1} ex2={ex2} ex3={ex3} />
    </div>
  )
}

export default App
