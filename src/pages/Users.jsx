import { useEffect } from "react"
import SideEffects from "../components/SideEffects.jsx"

const Users = () => {
  useEffect(() => {
      document.title = 'Users - Side Effects Router'
    }, [])

  return (
    <section>
      <h1>
        Users
      </h1>

      <SideEffects />
    </section>
  )
}

export default Users;