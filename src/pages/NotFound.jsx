import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
      document.title = 'Not Found - Side Effects Router'
    }, [])

  return (
    <div>
      <h1>
        Page Not Found
      </h1>
    </div>
  )
}

export default NotFound;