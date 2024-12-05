// Copy everything between the ``` and paste into src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/theme/theme-provider'
import { Layout } from './components/layout/layout'
import { Calendar } from './components/calendar/calendar'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="alfie-ui-theme">
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Calendar />} />
              {/* Add other routes as needed */}
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
