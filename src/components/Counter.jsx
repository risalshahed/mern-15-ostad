import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>
        Counter
      </h2>
      <div>
        <button onClick={() => setCount(prev => prev + 1)}>
          +
        </button>
      </div>
      <p>
        { count }
      </p>
    </div>
  )
}

export default Counter;