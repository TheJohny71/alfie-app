import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/theme/theme-provider'
import { Layout } from './components/layout/layout'
import { Calendar } from './components/calendar/calendar'

const queryClient = new QueryClient()

// Placeholder components for routes
const LeaveRequests = () => <div className="space-y-4"><h1>Leave Requests</h1></div>
const Team = () => <div className="space-y-4"><h1>Team</h1></div>
const Reports = () => <div className="space-y-4"><h1>Reports</h1></div>

function App() {
  const basePath = import.meta.env.BASE_URL

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="alfie-theme">
        <BrowserRouter basename={basePath}>
          <Layout>
            <Routes>
              <Route path="/" element={<Calendar />} />
              <Route path="/requests" element={<LeaveRequests />} />
              <Route path="/team" element={<Team />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
