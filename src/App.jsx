import './App.css'

// In React, A (Functional) Component is a Simple JavaScript Function
// React Component should be written in PascalCase

// JavaScript Statement -> Multi Line JavaScript e.g. for loop, if else statement, switch case
// JavaScript Expression -> Ternary Operator, Map, Filter, Reduce methods of Array

import Home from "./pages/Home";

// JSX -> JavaScript & XML


function App() {
  const isLogin = true;
  const name = 'Sakib';
  const isAdmin = true;

  // isLogin === true -> Jodi true (Boolean) hoy
  // isLogin -> Jodi Truthy value hoy

  // Truthy value kongula? Falsy values baad a, duniyar shob values e truthy
  // Falsy values -> null, undefined, 0 (number 0), '' (Empty String), false

  // Logic (in JavaScript)
  
  // JSX is HTML Like Syntax
  // JSX returns Only One Element

  // An array of Fruits
  const fruits = [
    'Apple', 'Mango', 'Orange', 'Dragon'
  ]

  return (
    <>
      <h1>
        Hello React
      </h1>
      {/* Ternary Operator */}
      <div>
        {
          isLogin ? <h1>Welcome {name}</h1> : <h1>Please Login</h1>
        }
      </div>
      <div>
        {
          // isAdmin ? <h1>Admin Panel</h1> : null
          // Logical && Operator
          isAdmin && <h1>Admin Panel</h1>
        }
      </div>

      {/* JS Loop */}
      <ul>
        {
          fruits.map(fruit =>
            <li>
              {fruit}
            </li>
          )
        }
      </ul>
      <Home />
    </>
  )
}

export default App;