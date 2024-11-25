import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <Link href="/" className="flex z-40 font-semibold">
          <img src="/paste_icon.svg" alt="Paste logo" />
        </Link>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
