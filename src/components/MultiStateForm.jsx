import { useState } from "react"


/* 
const myObj = {a: 1, b: 2, c: 3, d: 4}

{...myObj, d: 44}

{a: 1, b: 2, c: 3, d: 44}
*/

const MultiStateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData)
    // Clear Input Fields
    setFormData({
      name: '',
      email: '',
      password: ''
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{padding: '32px 0'}}
      className="app"
    >
      <input
        type="text"
        placeholder="Enter your name"
        name='name'
        value={formData.name}
        onChange={handleChange}        
      />
      <input
        type="email"
        placeholder="Enter your email"
        name='email'
        value={formData.email}
        onChange={handleChange}        
      />
      <input
        type="password"
        placeholder="Enter your password"
        name='password'
        value={formData.password}
        onChange={handleChange}        
      />
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

export default MultiStateForm;