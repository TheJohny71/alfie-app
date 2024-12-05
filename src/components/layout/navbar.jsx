import { ModeToggle } from "../theme/mode-toggle"
import { Calendar, Settings, User } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/10 dark:border-gray-800/10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-4">
          <div className="lg:hidden font-semibold text-gray-900 dark:text-white">Alfie</div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <nav className="flex items-center gap-1">
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white transition-all duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]">
                <Calendar className="h-5 w-5" />
              </button>
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white transition-all duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]">
                <Settings className="h-5 w-5" />
              </button>
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white transition-all duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]">
                <User className="h-5 w-5" />
              </button>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
