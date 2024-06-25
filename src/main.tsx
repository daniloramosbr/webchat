
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.scss'
import { ContextProvider } from './context/context.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <App />
  </ContextProvider>
  
)
