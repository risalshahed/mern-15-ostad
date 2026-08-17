import { useState } from "react"

const ObjectState = () => {
  const [user, setUser] = useState({
    name: 'Osman Hadi',
    age: 29
  })

  const changeName = () => {
    // user.name = 'Sharif Osman Hadi'
    const newUser = {
      ...user,
      name: 'Sharif Osman Hadi'
    }
    setUser(newUser);
  }

  return (
    <div
      className='box'
      style={
        {
          margin: '32px auto',
          textAlign: 'center'
        }
      }
    >
      <h2>
        Name: {user.name}
      </h2>
      <p>
        Ager: {user.age}
      </p>

      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  )
}

export default ObjectState;