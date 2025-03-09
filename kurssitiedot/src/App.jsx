const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.ex}
      </p>
    </div>
  )
}

const Content = (props) => {
  const part1 = props.course.parts[0]
  const part2 = props.course.parts[1]
  const part3 = props.course.parts[2]
  return (
    <div>
      <Part part={part1.name} ex={part1.exercises}/>
      <Part part={part2.name} ex={part2.exercises}/>
      <Part part={part3.name} ex={part3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  const ex1 = props.course.parts[0].exercises
  const ex2 = props.course.parts[1].exercises
  const ex3 = props.course.parts[2].exercises
  const total = ex1 + ex2 + ex3
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
