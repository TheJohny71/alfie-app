// Copy everything between the ``` and paste into src/components/layout/sidebar.jsx
import { Calendar, Clock, Users, BarChart } from "lucide-react"
import { Link } from "react-router-dom"

const navigation = [
  { name: "Calendar", href: "/", icon: Calendar },
  { name: "Leave Requests", href: "/requests", icon: Clock },
  { name: "Team", href: "/team", icon: Users },
  { name: "Reports", href: "/reports", icon: BarChart },
]

export function Sidebar() {
  return (
    <div className="hidden border-r bg-background lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7 p-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold hover:bg-accent hover:text-accent-foreground"
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
