import { useState } from 'react'
import styles from './Counter.module.css'
export default function Counter({counterName, children}) {
  console.log(styles);
  const [count, setCount] = useState(0)
  return (
    <div style={{ textAlign: 'center' }}  className={styles['text-xl']}>
      <h1>{count}</h1>
      <button className={styles.button}
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
