import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-page">
      <div className='counter-container'>
        <div>
          <h1 className="number">{count}</h1>
        </div>
        <div className="counter-btns-container">
          <button className="increment" onClick={() => setCount(count + 1)}>+</button>
          <button className="decrement" onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    </div>
  )
}

export default Counter