import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-primaryGray bg-stroke transition-all">
      <Link href="/" className="flex z-40 font-semibold">
        <img src="/paste_icon.svg" alt="Paste logo" />
      </Link>
    </nav>
  )
}

export default Navbar
