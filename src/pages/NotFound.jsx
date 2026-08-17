import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
      document.title = 'Not Found - Side Effects Router'
    }, [])

  return (
    <section>
      <h1>
        Page Not Found
      </h1>
    </section>
  )
}

export default NotFound;