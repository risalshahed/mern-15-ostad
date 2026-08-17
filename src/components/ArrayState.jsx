import { useState } from "react"

const ArrayState = () => {
  const [fruits, setFruits] = useState([
    'Apple',  // 0
    'Lichie', // 1
    'Banana', // 2
    'Grapes'  // 3
  ])

  const addFruit = () => {
    // React Way
    setFruits([
      'Mango',
      ...fruits,
    ])
    // Vanilla JavaScript Way
    /* fruits.push('Mango');   // array er seshe 1ta element add korte, we use "push"
    fruits.unshift('Mango');   // array er suru te 1ta element add korte, we use "push" */
  }

  // After Updating the State, the fruits,
  /* 
    'Mango',  // 0
    'Apple',  // 1
    'Lichie', // 2
    'Banana', // 3
    'Grapes'  // 4
  */

  return (
    <div className="app box">
      {
        fruits.map(fruit =>
          <p key={crypto.randomUUID()}>
            {fruit}
          </p>
        )
      }

      <button onClick={addFruit}>
        Add Mango
      </button>
    </div>
  )
}

export default ArrayState;