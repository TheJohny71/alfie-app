import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <Navbar />
      <div className="flex min-h-[calc(100vh-3.5rem)]">
        <Sidebar />
        <main className="flex-1 lg:pl-72">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
