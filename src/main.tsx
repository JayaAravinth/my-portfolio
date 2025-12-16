import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Remove StrictMode for production - it's only useful in development
createRoot(document.getElementById('root')!).render(<App />)
