import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/theme/theme-provider'
import Layout from './components/layout/layout'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="alfie-ui-theme">
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
