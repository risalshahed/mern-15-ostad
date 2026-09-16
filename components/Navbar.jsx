import Link from "next/link.js";

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href='/' className="text-xl font-bold capitalize">
          logo
        </Link>

        <div className="flex gap-6">
          <Link href='/' className="capitalize">home</Link>
          <Link href='/about' className="capitalize">about</Link>
          <Link href='/products' className="capitalize">products</Link>
          <Link href='/contact' className="capitalize">contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;