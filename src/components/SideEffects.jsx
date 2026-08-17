import { useEffect, useState } from "react";

const SideEffects = () => {
  /* 
  useEffect -> kokhn run hoy?
  Component Render howar pore (Even After UI Paint) jodi amra kono kaj korte chai, tahole amra useEffect bebohar kori
  
  API Call
  Document Title Change
  Event Listener, Timer, Subscription, External system er sathe kaj korte gele

  useEffect(
    function,
    dependency
  )
  */

  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  /* JSON.parse(res)
  res.json() */

  const fetchUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      // console.log(res);
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className="app">
      <h1>
        SideEffects
      </h1>

      {
        users.map(user =>
          <p key={user.id} style={{ marginBottom: '0.5rem' }}>
            {user.name}
          </p>
        )
      }

      
      <div style={
        {
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          margin: '2rem auto'
        }
      }>
        <button onClick={() => setCount(count + 1)}>
          +
        </button>
        <p>
          {count}
        </p>
      </div>
    </div>
  )
}

export default SideEffects;