import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/theme/theme-provider'
import { Layout } from './components/layout/layout'
import { Calendar } from './components/calendar/calendar'

// Placeholder components for routes
const LeaveRequests = () => <div className="p-4">Leave Requests</div>
const Team = () => <div className="p-4">Team</div>
const Reports = () => <div className="p-4">Reports</div>

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="alfie-ui-theme">
        <Router basename="/alfie-app">
          <Layout>
            <Routes>
              <Route path="/" element={<Calendar />} />
              <Route path="/requests" element={<LeaveRequests />} />
              <Route path="/team" element={<Team />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
