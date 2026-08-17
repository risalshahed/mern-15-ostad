import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div>
        <h1>
          Side Effects, Memoize, Router
        </h1>

        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/auth">
                Authentication
              </Link>
            </li>
            <li>
              <Link to="/users">
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;