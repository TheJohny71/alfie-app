import { ModeToggle } from "../theme/mode-toggle"
import { User, Calendar, Settings } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center gap-4">
        <div className="lg:hidden font-semibold">Alfie</div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              <Calendar className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              <Settings className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              <User className="h-5 w-5 text-muted-foreground" />
            </button>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
