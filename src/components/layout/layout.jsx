import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 lg:pl-72">
          <main className="min-h-[calc(100vh-3.5rem)] p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
