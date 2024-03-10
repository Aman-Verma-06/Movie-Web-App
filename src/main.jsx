import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { MovieProvider } from './GlobalContext/movieContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>
  </React.StrictMode>,
);
