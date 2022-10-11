import React from 'react'

const Test = () => {
  const [counter, setCounter] = React.useState(0)

  const increment = () => {
    setCounter(prev => prev + 1)
  }

  const decrement = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <div>
      <h1>Test component</h1>

      <h2>counter: {counter} </h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Test