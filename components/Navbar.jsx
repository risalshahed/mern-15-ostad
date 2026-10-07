import Link from "next/link.js"

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-xl mx-auto p-4 flex justify-between items-center">
        <Link href='/' className="text-2xl font-bold text-blue-600">
          Blog
        </Link>

        <div className="flex gap-4 text-gray-600">
          <Link href='/' className="hover:text-blue-600">Home</Link>
          <Link href='/about' className="hover:text-blue-600">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;