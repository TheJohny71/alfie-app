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
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200/10 bg-white/50 dark:bg-gray-900/50 px-6 pb-4 backdrop-blur-xl">
          <div className="flex h-14 shrink-0 items-center border-b border-gray-200/10">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-lg font-semibold">Alfie</span>
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`group flex gap-x-3 rounded-md p-2 text-sm font-medium ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
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
      </div>

      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <nav className="flex border-b border-gray-200/10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl p-4">
          <ul className="flex gap-x-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`group flex flex-col items-center gap-1 rounded-md p-2 text-xs font-medium ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}
