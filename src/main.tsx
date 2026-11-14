import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import '@fontsource/source-serif-4/400.css'
import '@fontsource/source-serif-4/600.css'
import '@fontsource/source-serif-4/700.css'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/600.css'
import 'remixicon/fonts/remixicon.css'
import './index.css'
import App from './App.tsx'
import { MediaProvider } from './context/MediaContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MediaProvider>
      <App />
    </MediaProvider>
  </StrictMode>,
)
