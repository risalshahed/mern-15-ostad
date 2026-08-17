import { useState } from "react";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleName = (event) => {
    // console.log(event)
    setName(event.target.value)
    // console.log(event.target)
    // console.log(event.target.value)
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, email);
    // Clear Input Fields
    setName('');
    setEmail('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{padding: '32px 0'}}
    >
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleName}
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmail}
      />
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default Form;