import { useState } from "react"

const StateDemo = () => {
  /* 
  State's Data Update -> Component Re-Render -> UI Paint -> Displayed to User
  */
  const [number, setNumber] = useState(0)
  
  console.log('State Demo Component Re Rendered')
  
  return (
    <div className='app box'>
      <p>
        {number}
      </p>

      <button onClick={() => setNumber(number + 1)}>
        +
      </button>
    </div>
  )
}

export default StateDemo;