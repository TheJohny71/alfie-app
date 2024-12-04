import { ModeToggle } from "@/components/theme/mode-toggle"
import { User, Calendar, Settings } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a className="flex items-center space-x-2" href="/">
            <span className="font-bold">Alfie</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <nav className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <Settings className="h-5 w-5" />
            <User className="h-5 w-5" />
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
