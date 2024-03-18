import Link from "next/link"
import { Key } from "lucide-react"

export const Navbar = () => {
  return (
    <header className="flex h-16 items-center border-b px-4 md:px-6">
      <Link
        className="mr-4 flex items-center gap-2 text-lg font-semibold sm:text-base"
        href="#"
      >
        <Key className="size-6" strokeWidth={3} />
        <span>Auth Taxonomy</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#"
        >
          Documentation
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#"
        >
          Register
        </Link>
      </nav>
    </header>
  )
}
