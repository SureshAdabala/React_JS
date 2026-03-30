import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GiftProvider from './Context/GiftContext.jsx'

createRoot(document.getElementById('root')).render(
  <GiftProvider>
    <App/>
  </GiftProvider>
)
