import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ForecastProvider from './components/forecastprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ForecastProvider>
      <App />
    </ForecastProvider>
  </StrictMode>,
)
