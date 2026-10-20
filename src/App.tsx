import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import Header from './components/feature/Header'
import Footer from './components/feature/Footer'
import SeoManager from './components/feature/SeoManager'

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <SeoManager />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
