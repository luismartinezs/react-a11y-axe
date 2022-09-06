import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axe from '@axe-core/react'
import './index.css'


if (import.meta.env.MODE !== 'production') {
  axe(React, ReactDOM, 1000);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
