import { useEffect } from "react"
import Form from "../components/Form.jsx"
import MultiStateForm from "../components/MultiStateForm.jsx"

const Authentication = () => {
  useEffect(() => {
    document.title = 'Auth - Side Effects Router'
  }, [])

  return (
    <div>
      <h1>
        Authentication
      </h1>

      <Form />
      <MultiStateForm />
    </div>
  )
}

export default Authentication;