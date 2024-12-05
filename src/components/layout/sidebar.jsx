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
    <div className="hidden border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
      <div className="flex h-14 items-center border-b border-border/40 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-semibold text-lg">Alfie</span>
        </Link>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-1 p-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`group flex gap-x-3 rounded-md p-2 text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
                    }`}
                >
                  <item.icon className="h-5 w-5" />
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
