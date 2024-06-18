import React, { useState } from 'react'

const CounterElement = () => {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1)
  }
  
  const Decrease = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <div style={{fontSize: '40px',}}>
        {count}
      </div>
      <div>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
      </div>
    </div>
  )
}

export default CounterElement;
