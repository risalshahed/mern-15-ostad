import { useEffect, useState } from "react";

const SideEffects = () => {
  /* 
  Why useEffect?
  Component render howar pashapashi, Side Effects run korte, use Effect use hoy. The core usages are,

  * API Call
  * Timer
  * Page Title change in Browser
  * Event Listener
  * Local Storage
  * Subscription
  */

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Use Effect / Component Mounted');
  }, [count]);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer Running')
    }, 1000);     // 1000 milli seconds

    // Cleanup Function -> Clear the Full Reference
    clearInterval(timer);
  }, []);

  /* 
  Cleanup Function kokhn chole?
  * Component Mounts
  * Side Effect Runs
  * Timer Starts
  * Component Unmounts
  * Cleanup Runs
  * Timer Stops
  */

  /* 
  The problems might arise due to Memory Leak
  * Unnecessary Resource Usage
  * Multiple Listeners / Timers
  * Stale Behavior
  * Performance Problem
  */

  /*
  Function - Memory Leak Preventing Function
  setInterval - clearInterval
  setTimeout - clearTimeout
  addEventListener - removeEventListener
  subscribe - unsubscribe
  */

  // Event Listener
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);
    
    // Cleanup Function
    window.removeEventListener('resize', handleResize);
  }, []);

  /* 
  You may study these JS DOM Topics (Off topics from this class)
  clientHeight, scrollHeight
  clientWidth, scrollWidth
  */

  return (
    <div className="counter">
      <h2>
        SideEffects
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

export default SideEffects;