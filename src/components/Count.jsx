import { useState } from "react";

const Count = () => {
  // state hosse shei data, ja Browser er Re-render a Update hoy
  // let count = 0;  // A normal variable, which is NOT STATE

  // Let us define state
  let [count, setCount] = useState(0)
  /* 
  Here, count -> A State variable / data
  setCount -> A setter function, which will update the State immutably
  */

  // Function Declaration
  const handleClick = () => {
    // count += 1;
    setCount(count + 1);  // before re-render -> count = 0
    console.log(count);   // this console prints the value before the re-render
  }

  console.log('after re-render', count);

  return (
    <div style={{ padding: '40px' }}>
      <p style={{background: 'black', color: 'white', }}>
        {count}
      </p>

      <button
        // onclick='handleClick()' // HTML
        onClick={handleClick}
        style={
          {
            backgroundColor: 'blue',
            padding: '8px 12px',
            border: 'none',
            borderRadius: '5px',
            color: 'white'
          }
        }
      >
        Add Count
      </button>
    </div>
  )
}

export default Count;