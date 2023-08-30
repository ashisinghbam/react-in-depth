import { useState } from "react"

export default function Counter({ children }) {
  console.log(children);
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
        }}
      >
        Increase Count
      </button>
      {children}
    </div>
  )
}
