import React from 'react'
import useStoreSelector from '../../store/store';

const CounterWithZustand = () => {
  const count = useStoreSelector.use.count;
  const Increment = useStoreSelector.use.Increment();
  const Decrement = useStoreSelector.use.Decrement();
  
  return (
    <div>
      <div style={{fontSize: '40px',}}>
        {count}
      </div>
      <div>
        <button onClick={Increment}>Increase</button>
        <button onClick={Decrement}>Decrease</button>
      </div>
    </div>
  )
}

export default CounterWithZustand;
