const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-5">
        <h1>
          Product API
        </h1>
        <nav className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;