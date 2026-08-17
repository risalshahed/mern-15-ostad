import { useMemo, useState } from "react";

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const handleCounter = () => {
    console.log('Counter Rendered')
    setCount(count + 1);
  }

  const heavyCalculation = num => {
    console.log('Calculation Rendered')

    let result = 0;

    for(let i = 0; i < 1000000000; i++) {
      result += num;
    }

    return result;
  }

  // const result = heavyCalculation(number);

  /* 
  useMemo  -> Expensive Calculation er result "cache" kore rakhe
  useMemo(function, dependency)
  */
  const result = useMemo(() => {
    return heavyCalculation(number);
  }, [number]);

  const handleNumber = () => {
    console.log('Number Rendered');
    setNumber(number + 1);
  }

  return (
    <div>
      <h1>
        Expensive Calculation
      </h1>

      <div style={
        {
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }
      }>
        <p>
          {count}
        </p>
        <button onClick={handleCounter}>
          +
        </button>
      </div>

      <div>
        <h3>
          Result: {result}
        </h3>

        <button onClick={handleNumber}>
          Change Number
        </button>
      </div>
    </div>
  )
}

export default ExpensiveCalculation;