import { NavLink } from "react-router-dom"

const Header = () => {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? 'cyan' : 'white'
  })

  /* const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? 'cyan' : 'black'
    }
  } */

  return (
    <header className="header">
      <div className="logo">
        MyBlogs
      </div>
      {/* Navigation */}
      <div className="nav">
        <NavLink to='/' style={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to='/about' style={navLinkStyle}>
          About
        </NavLink>
        <NavLink to='/blogs' style={navLinkStyle}>
          Blogs
        </NavLink>
        <NavLink to='/contact' style={navLinkStyle}>
          Contact
        </NavLink>
      </div>
    </header>
  )
}

export default Header;