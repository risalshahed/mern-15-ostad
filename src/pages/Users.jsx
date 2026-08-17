import { useEffect } from "react"
import SideEffects from "../components/SideEffects.jsx"

const Users = () => {
  useEffect(() => {
      document.title = 'Users - Side Effects Router'
    }, [])

  return (
    <div>
      <h1>
        Users
      </h1>

      <SideEffects />
    </div>
  )
}

export default Users;