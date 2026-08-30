import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-5">
        <h1>
          Product API
        </h1>
        <nav className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;