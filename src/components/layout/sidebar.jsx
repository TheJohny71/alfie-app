import { Calendar, Clock, Users, BarChart } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const navigation = [
  { name: "Calendar", href: "/", icon: Calendar },
  { name: "Leave Requests", href: "/requests", icon: Clock },
  { name: "Team", href: "/team", icon: Users },
  { name: "Reports", href: "/reports", icon: BarChart },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-72 lg:flex-col bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 border-r border-gray-200/10 dark:border-gray-800/10">
      <div className="flex h-14 items-center border-b border-gray-200/10 dark:border-gray-800/10 px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-semibold text-lg text-gray-900 dark:text-white">Alfie</span>
        </Link>
      </div>
      <nav className="flex-1">
        <ul role="list" className="flex flex-col gap-1 p-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ease-[cubic-bezier(0.4,0.0,0.2,1)]
                    ${isActive 
                      ? 'bg-primary/10 text-primary dark:text-primary-foreground'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
                    }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
