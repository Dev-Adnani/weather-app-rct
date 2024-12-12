import { BrowserRouter, Route , Routes } from "react-router-dom"
import { ThemeProvider } from "./context/theme-provider"
import WeatherDashboard from "./pages/WeatherDashboard"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Layout from "./components/layout"
import { Toaster } from "sonner"
import { CityPage } from "./pages/CityPage"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry:false,
      refetchOnWindowFocus: false,
    }
  }
})

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Routes>
            <Route path="/" element={<WeatherDashboard/>} />
            <Route path="/city/:cityName" element={<CityPage/>} />
            </Routes>
          </Layout>
          <Toaster richColors/>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
