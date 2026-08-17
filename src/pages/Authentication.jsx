import { useEffect } from "react"
import Form from "../components/Form.jsx"
import MultiStateForm from "../components/MultiStateForm.jsx"

const Authentication = () => {
  useEffect(() => {
    document.title = 'Auth - Side Effects Router'
  }, [])

  return (
    <section>
      <h1>
        Authentication
      </h1>

      <Form />
      <MultiStateForm />
    </section>
  )
}

export default Authentication;