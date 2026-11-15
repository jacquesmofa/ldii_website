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

/**
 * Scroll reveal: anything marked data-reveal rises into place the first time it
 * enters the screen. Skipped for visitors who ask for reduced motion.
 */
function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    document.documentElement.classList.add('motion')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) }
      }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    const scan = () => document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => io.observe(el))
    scan()
    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { io.disconnect(); mo.disconnect(); document.documentElement.classList.remove('motion') }
  }, [])
  return null
}

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToTop />
      <RevealOnScroll />
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
