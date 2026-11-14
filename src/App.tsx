import { Suspense, useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { AppRoutes } from './router'
import Header from './components/feature/Header'
import Footer from './components/feature/Footer'
import SeoManager from './components/feature/SeoManager'

/** New page: start at the top (unless the address points to a section). */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToTop />
      <SeoManager />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main" className="flex-1">
          <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
            <AppRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
