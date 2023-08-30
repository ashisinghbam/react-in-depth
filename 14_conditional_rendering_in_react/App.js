import { useState } from "react"
import AppleCounter from "./components/AppleCounter"
import Counter from "./components/Counter"

const App = () => {
  const [isTrue, setIsTrue] = useState(true)
  function handleCondition() {
    if (isTrue) {
     return <Counter />
    } else {
     return <AppleCounter />
    }
  }

  return (
    <div>
      <button onClick={() => setIsTrue(!isTrue)}>Toggle</button>
      {/* {isTrue ? <Counter/> : <AppleCounter />} */}
      {handleCondition()}
      {/* <Counter/> */}
      {/* <AppleCounter /> */}
    </div>
  )
}

export default App
