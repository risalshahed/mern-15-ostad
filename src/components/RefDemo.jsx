import { useRef } from "react"

const RefDemo = () => {
  // We will use "useRef()" hook, only when, jokhn ami chai, Data Update korte, BUT THE COMPONENT WILL NOT RE-RENDER
  const headingRef = useRef(null);    // null is initial value
  const inputRef = useRef(null);    // null is initial value
  const boxRef = useRef(null);    // null is initial value
  const htmlRef = useRef(null);    // null is initial value

  // console.log(headingRef.current.innerText);

  const changeHeader = () => {
    headingRef.current.innerText = 'Escape Hatches'
  }

  const focusInput = () => {
    inputRef.current.focus()
  }

  const toggleClass = () => {
    boxRef.current.classList.toggle('active');
  }
  
  const addHTML = () => {
    htmlRef.current.innerHTML = `
      <h2>Hello</h2>
      <p>This is a paragraph</p>
    `;
  }

  return (
    <div className="box">
      <h2>
        Use Reference Demo
      </h2>
      <div className="app">
        {/* Step 1 -> jei JSX or React Element er Data change korte chai, oi ta k reference value ta dibo */}
        <h2 ref={headingRef}>
          Hello React
        </h2>
        <button onClick={changeHeader}>
          Change Header
        </button>
      </div>

      <div className="app">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type Something"
        />
        <button onClick={focusInput}>
          Focus Input
        </button>
      </div>

      <div className="app">
        <h2 ref={boxRef}>
          Hello React
        </h2>
        <button onClick={toggleClass}>
          Toggle
        </button>
      </div>

      <div className="app">
        <div ref={htmlRef}>
          Initial Content
        </div>
        <button onClick={addHTML}>
          Add HTML
        </button>
      </div>
    </div>
  )
}

export default RefDemo;